export default function handleResponseFromAPI(promise) {
  promise.then(
    () => (Promise.resolve({
      status: 200,
      body: 'success',
    })),
    () => Promise.reject(new Error()),
    console.log('Got a response from the API'),
  );
}
