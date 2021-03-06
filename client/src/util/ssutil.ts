// import ReactGA from "react-ga";
import numeral from "numeral";

export function ensureValue<T>(value: T | undefined | null, fallback: T): T {
  if (typeof value === "undefined") {
    return fallback;
  } else if (value === null) {
    return fallback;
  } else {
    return value;
  }
}

export function ensure<T>(value: T | undefined | null, errorMessage?: string): T {
  return assertDefinedAndNotNull(value, errorMessage);
}

export function assertDefinedAndNotNull<T>(value: T | undefined | null, errorMessage?: string): T {
  if (typeof value === "undefined" || value === null) {
    const msg = ensureValue<string>(errorMessage, "assertDefinedAndNotNull failed");
    throw Error(msg);
  } else {
    return value;
  }
}

export function spaRedir(url: string) {
  window.history.pushState(null, "ignore", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.document.body.scrollTop = 0;

  // window.setTimeout(() => {
  //   ReactGA.pageview(url);
  // }, 20);


}

export function capFirstLetter(s: string): string {
  const firstChar = s.substring(0, 1);
  const rest = s.substring(1);
  return firstChar.toUpperCase() + rest;
}

/**
 * Contains at least 10 digits
 * 714 654 6550
 */
export function isValidPhoneNumber(ph: string): boolean {
  if (!ph) return false;
  if (ph.length < 10) return false;
  const stripped = ph.replace(/[\D]/g, "");
  return stripped.length >= 10;
}


//$FlowFixMe
// const currencyFormatter = new Intl.NumberFormat("en-US", {style: 'currency', currency: 'USD',maximumFractionDigits:0});

export function formatCurrency(num: number): string {
  return numeral(num).format("$0,0.00");
  // return currencyFormatter.format(num)
}

export function params(obj: any) {
  return Object.keys(obj).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])).join("&");
}

