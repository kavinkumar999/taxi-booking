export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
      server.db.loadData({
    post: [
      {username: '1st Post' , pass:'This is the first post'},
      {username: '2nd Post' , pass:'This is the second post'},
      {username: '3rd Post' , pass:'This is the third post'},
      {username: '4th Post' , pass:'This is the fourth post'},
      {username: '5th Post' , pass:'This is the fifth post'}
    ]
  }) 

  // server.createList('customer');
}
