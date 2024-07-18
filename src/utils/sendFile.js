import multer from "multer";
import path from "path";

//1024 is 1kb  1024kb * 1024kb = 1mb*2 = 2mb

let limits = {
  fileSize: 1024 * 1024 * 2,
  // the maximum fileSize in bytes
  // 1 kiloBytes => 1024 bytes
};
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
    // ./means root(main) folder
    // you must make public folder manually or it will throw an error  like no such file or directory
    //destination gives the folder location where file is placed
  },
  fileName: (req, file, cb) => {
    //any file has key and value
    //key is called file name, value is called original name.

    let filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
    //file name gives the name(title) of file
  },
});

let fileFilter = (req, file, cb) => {
  let validExtensions = [
    ".jpg",
    ".JPG",
    ".jpeg",
    ".JPEG",
    ".png",
    ".PNG",
    ".svg",
    ".doc",
    ".pdf",
    ".mp4",
  ];
  let originalName = file.originalname;
  let originalExtension = path.extname(originalName);

  //path module is inbuilt module or package of node js.

  let isValidExtensions = validExtensions.includes(originalExtension);

  if (isValidExtensions) {
    cb(null, true);
    //true means pass such types of file
    //null represents error since there  is no error thus error is null
  } else {
    cb(new Error("File is not supported"), false);
    //false means don't pass such type of file
  }
};

const upload = multer({
  storage: storage,
  // we define the location in server where file  is store and control the fileName.
  fileFilter: fileFilter,
  //filter the file according to extensions.
  limits: limits,
  //filter file limit according to limit.
});

export default upload;
