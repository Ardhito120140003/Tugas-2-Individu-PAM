//contoh Callbacks
const notify = () => {
    console.log('Download complete!');
};

const download = (url, callback) => {
  console.log(`Downloading from ${url}....`);
  callback();
};

const url = 'https://brachio.site/download';
download(url, notify);
