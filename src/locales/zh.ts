import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "取消繪製",
    text: "取消",
  },
  finish: {
    title: "結束繪製",
    text: "結束",
  },
  undo: {
    title: "刪除最後一個繪製點",
    text: "刪除最後一個點",
  },
  buttons: {
    polyline: "繪製折線",
    polygon: "繪製多邊形",
    rectangle: "繪製矩形",
    circle: "繪製圓形",
    marker: "繪製標誌物",
    circlemarker: "繪製圓形標誌物",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "單擊並拖拽繪製圓形",
    },
    radius: "半徑",
  },
  circlemarker: {
    tooltip: {
      start: "單擊地圖放置圓形標誌物",
    },
  },
  marker: {
    tooltip: {
      start: "單擊地圖放置標誌物",
    },
  },
  polygon: {
    tooltip: {
      start: "單擊地圖繪製圖形",
      cont: "繼續單擊繪製圖形",
      end: "單擊起始點結束繪製",
    },
  },
  polyline: {
    error: "<strong>錯誤:</strong> 圖形邊緣不能交叉!",
    tooltip: {
      start: "單擊地圖繪製折線",
      cont: "繼續單擊繪製下一段折線",
      end: "單擊最後一個點結束繪製",
    },
  },
  rectangle: {
    tooltip: {
      start: "單擊並拖拽繪製矩形",
    },
  },
  simpleshape: {
    tooltip: {
      end: "鬆開鼠標結束繪製",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "保存變更",
      text: "保存",
    },
    cancel: {
      title: "取消編輯，放棄所有變更",
      text: "取消",
    },
    clearAll: {
      title: "清除所有圖形",
      text: "清除所有",
    },
  },
  buttons: {
    edit: "編輯圖形",
    editDisabled: "無圖形可編輯",
    remove: "刪除圖形",
    removeDisabled: "無圖形可刪除",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "拖拽線段或標誌點以編輯圖形",
      subtext: "點擊<strong>取消</strong>按鈕撤銷變更",
    },
  },
  remove: {
    tooltip: {
      text: "單擊圖形以移除",
    },
  },
};

export default {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers,
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers,
  },
};
