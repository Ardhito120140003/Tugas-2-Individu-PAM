//contoh Promise
let progress = 100;
const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve('Download complete');
  } else {
    reject('Download failed');
  }
});

//contoh Async Await
const getStatus = (url) => {
    console.log(`Downloading from ${url}...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Download Complete');
      }, 3000);
    });
};
async function download(url) {
    let status = await getStatus(url); // tunggu sampai promise selesai
    console.log(status);
}
const url = 'https://brachio.site/download';
download(url);