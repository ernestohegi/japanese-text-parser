import FileSaver from "file-saver";

const createBlob = (content, type) => new Blob([content], { type });

export default {
  saveFile(name, content, type) {
    FileSaver.saveAs(createBlob(content, type), name);
  },
};
