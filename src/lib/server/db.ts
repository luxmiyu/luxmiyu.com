import { env } from '$env/dynamic/private'
import { MongoClient, Db } from 'mongodb'

const client = new MongoClient(env.MONGODB_URI)
let db: Db

try {
  await client.connect()
  db = client.db('default')
  console.log('Connected to MongoDB')
} catch (e) {
  console.error(e)
}

async function session(fn: () => Promise<unknown>) {
  const session = client.startSession()

  try {
    session.startTransaction()
    await fn()
    await session.commitTransaction()
  } catch (e) {
    await session.abortTransaction()
    throw e
  } finally {
    await session.endSession()
  }
}

const config = {
  set: async (id: string, config: Record<string, unknown>) =>
    await db.collection('config').updateOne({ id }, { $set: config }, { upsert: true }),
  get: async (id: string) =>
    await db.collection('config').findOne({ id }, { projection: { _id: 0 } }),
}

export { client, db, session, config }
