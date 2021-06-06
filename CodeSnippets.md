# Code Snippets for Data Store

## Table of Contents
- [Store Data ](#storing-data)
- [Query Data](#query-data)
    - [Fetch single data](#case-1--)
    - [Fetch all the data](#case-2--)
    - [Fetch filtered data](#case-3--)
    - [Fetch data in ascending/descending order](#case-4--)
- [Real Time Data](#real-time-data)
- [Delete Data](#delete-data)

## Storing data
> To save data in the data model

```javascript
async function handleSubmit(e){
    e.preventDefault();
    await DataStore.save(
        new Comment({
            "postID": postID, // postID received as props
            "createdBy": createdBy, // 
            "content": comment,
            "createdAt":new Date().toLocaleString()
          })
        );
    console.log(comment, postID, createdBy)
  }
```

## Query Data 

### Case 1 - 
> To fetch all the data from data model

```javascript
async function fetchComments(){
    const comment = await DataStore.query(Comment);
}
```

### Case 2 - 
> To fetch single data from data model

```javascript
async function fetchComments(id){
    const comment = await DataStore.query(Comment, id);
    console.log(comment);
}
```

### Case 3 - 
> To fetch filtered data from data model 

```javascript
async function fetchComments() {
    const comment = (await DataStore.query(Comment)).filter(
      (c) => c.postID === postID //postID received as props
    );
    setDisplayComments(comment);
  }
```

### Case 4 - 
> To fetch and display data in particular sorted order 

```javascript
async function fetchComments() {
    const comments = await DataStore.query(Comment, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.DESCENDING)
    });
   /* const posts = await DataStore.query(Comment, Predicates.ALL, {
        sort: (s) => s.createdAt(SortDirection.ASCENDING)
    }); */
    console.log(comments);
    setDisplayComments(comments);
}
```

## Real Time data
> To display real-time data

```javascript
  useEffect(() => {
    const subscription = DataStore.observe(Comment).subscribe((msg) => {
      fetchComments();
    });

    return () => subscription.unsubscribe();
  }, []);
```

## Delete Data
> To delete the particular data item from Data model

```javascript
 async function handleDelete(id) {

    const todelete = await DataStore.query(Comment, id);
    DataStore.delete(todelete);
  }
```

## Reference
https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js
