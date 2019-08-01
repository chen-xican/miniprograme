module.exports = {

  main: async (event, context, db, _, util) => {

    const count = await db.collection('user').count();

    const list = await db.collection('user').get();

    return { event, context, count, list };

  }
}

