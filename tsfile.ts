/* eslint-disable camelcase */
/* eslint-disable no-cond-assign */
/* eslint-disable no-useless-escape */

// const UC = /(?:UCWEB|UCBrowser\/)([\d\.]+)/;
const QQ = /MQQBrowser\/([\d\.]+)/;
const FIREFOX = /(?:Firefox|FxiOS)\/([\d\.]+)/;
const IOS_WEBVIEW = /OS ([\d_\.]+) like Mac OS X/;
// const WINDOWS_PHONE = /Windows\sPhone\s(?:OS\s)?([\d\.]+)/;
const CHROME_WEBVIEW = /Version\/[\d+\.]+\s*Chrome/;
const MSIE = /MSIE\s([\d\.]+)/;
const IE_MOBILE = /IEMobile\/([\d\.]+)/;

export interface IBrowser {
  name: string; // 浏览器名称
  isWindowsPhone?: boolean;
  isQQ?: boolean;
  isFirefox?: boolean;
  isIEMobile?: boolean;
  isIE?: boolean;
  isIELikeWebkit?: boolean;
  isWebview?: boolean; // webview 环境
  isSafari?: boolean;
  isAndroid?: boolean;
  isChrome?: boolean;
  version: string; // 浏览器版本
}
export interface IAppInfo {
  appname: string;
  isWeixin?: boolean; // 微信
  isWechat?: boolean; // 小程序
  isWeibo?: boolean;
  isUCar?: boolean;
  isUCarinc?: boolean; // 新增是否在ucar webview 环境
  platform?: string;
  version?: string;
  apiNumber?: string;
}

export interface IOSInfo {
  name: string; // 系统名字
  isWindowsPhone?: boolean;
  isIPhone?: boolean;
  isIPad?: boolean;
  isIOS?: boolean;
  isAndroid?: boolean;
  isAndroidPad?: boolean;
  version: string; // 系统版本
}

/**
 * 获得当前系统信息
 */
export const getOSInfo: () => IOSInfo = (): IOSInfo => {
  const ua: string = navigator.userAgent;
  let matchs: RegExpMatchArray | null = ua.match(
    /Windows\sPhone\s(?:OS\s)?([\d\.]+)/
  );

  if (matchs !== null) {
    return {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: matchs[1],
    };
  }

  const isSafari: RegExpMatchArray | null = ua.match(/Safari/);
  matchs = ua.match(/Android[\s\/]([\d\.]+)/);
  const isAndroid: RegExpMatchArray | null = ua.match(/Mobile\s+Safari/);
  if (isSafari !== null && matchs !== null) {
    if (isAndroid !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1],
      };
    }
    return {
      name: 'AndroidPad',
      isAndroidPad: true,
      version: matchs[1],
    };
  }
  matchs = ua.match(/(iPhone|iPad|iPod)/);

  if (matchs !== null) {
    const name: string = matchs[1];
    matchs = ua.match(/OS ([\d_\.]+) like Mac OS X/);
    if (matchs !== null) {
      return {
        name,
        isIPhone: name === 'iPhone' || name === 'iPod',
        isIPad: name === 'iPad',
        isIOS: true,
        version: matchs[1].split('_').join('.'),
      };
    }
  }

  return {
    name: 'unknown',
    version: '0.0.0',
  };
};

/**
 * 简化getBrowserInfo 代码超过100 行限制;
 */
const unknown: () => IBrowser = (): IBrowser => ({
  name: 'unknown',
  version: '0.0.0',
});
/**
 * 获得浏览器环境信息
 */
export const getBrowserInfo: () => IBrowser = (): IBrowser => {
  const ua: string = navigator.userAgent;
  let matchs: RegExpMatchArray | null = ua.match(QQ);
  if (matchs !== null) {
    return {
      name: 'QQ',
      isQQ: true,
      version: matchs[1],
    };
  }
  matchs = ua.match(FIREFOX);
  if (matchs !== null) {
    return {
      name: 'Firefox',
      isFirefox: true,
      version: matchs[1],
    };
  }
  if (MSIE.test(ua) && IE_MOBILE.test(ua)) {
    matchs = ua.match(/IEMobile/);
    if (matchs !== null) {
      return {
        name: 'IEMobile',
        isIEMobile: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(/Android|iPhone/);
    if (matchs !== null) {
      return {
        name: 'IE',
        isIELikeWebkit: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(IE_MOBILE);
    if (matchs !== null) {
      return {
        name: 'IE',
        isIE: true,
        version: matchs[1],
      };
    }
  }
  if (/(?:Chrome|CriOS)\/([\d\.]+)/.test(ua)) {
    matchs = ua.match(CHROME_WEBVIEW);
    if (matchs !== null) {
      return {
        name: 'Chrome Webview',
        isWebview: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(/(?:Chrome|CriOS)\/([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Chrome',
        isChrome: true,
        version: matchs[1],
      };
    }
  }
  // eslint-disable-next-line
  if (/Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua)) {
    matchs = ua.match(/Android[\s\/]([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1],
      };
    }
  }
  /* eslint-disable */
  if (
    /iPhone|iPad|iPod/.test(ua) &&
    /Safari/.test(ua) &&
    /Version\/([\d\.]+)/.test(ua)
  ) {
    matchs = ua.match(/Version\/([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Safari',
        isSafari: true,
        version: matchs[1],
      };
    }
    if (IOS_WEBVIEW.test(ua)) {
      matchs = ua.match(IOS_WEBVIEW);
      if (matchs !== null) {
        return {
          name: 'iOS Webview',
          isWebview: true,
          version: matchs[0].replace(/\_/g, '.'),
        };
      }
    }
  }

  /* eslint-enable */
  return unknown();
};

export default {
  getBrowserInfo,
  getOSInfo,
};
