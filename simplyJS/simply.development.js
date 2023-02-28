/**
 * @license SimplyJS v1.0.1
 *
 * simply.development.js
 *
 * (c) Aldrin Caballero | Feb. 28, 2023
 * https://github.com/aldrin112602/SimplyJS
 *
 * License: MIT
 */

// Immediately Invoked Function Expression (IIFE)
const Simply = (() => {
  /**
   * Finds all script tags with type "text/simply" and extracts their contents or src attributes.
   * @return {NodeListOf<Element>} List of script tags with type "text/simply"
   */

  const findScript = () => {
    return document.querySelectorAll('script[type="text/simply"]');
  };
  if (findScript().length > 0) {
    const src = [...findScript()].map((simplyScript) => {
      return simplyScript.hasAttribute("src")
        ? { hasSrc: true, content: null, src: simplyScript.src }
        : { hasSrc: false, content: simplyScript.innerHTML, src: null };
    });


    /**
     * Gets the contents of a script tag with a src attribute.
     *
     * @param {string} src - The URL of the script file to get.
     * @return {Promise} Promise that resolves with the contents of the script file.
     */

    const getContents = (src) => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = (ev) => {
          resolve(xhr.responseText);
        };
        xhr.onerror = (ev) => {
          reject(xhr.response);
        };
        xhr.open("GET", src);
        xhr.send(null);
      });
    };

    Promise.all(
      src.map((src) => {
        if (src.hasSrc) return getContents(src.src);
        return src.content;
      })
    ).then((content) => {
      try {
        if(content.join('').length > 0) {
          eval(jsxToJs(content));
          console.log(jsxToJs(content));
        }
      } catch (err) {
        console.error(err);
        console.trace();
      }
    });
  }
  /**
   * Converts JSX code to JavaScript.
   * @param {Array<string>} content - The content of the script tags.
   * @return {string} The JavaScript code.
   *
   */
  function jsxToJs(content) {
    let jsCode = content
      .join("\n\n")
      .replace(/<(\w+)/g, 'createElement("$1", { ')
      .replace(/(\w+)="(.*?)"/g, '$1: "$2", ')
      .replace(/(\w+)='(.*?)'/g, '$1: "$2", ')
      .replace(/(\w+)=\{(.*?)\}/g, "$1: $2, ")
      .replace(/,(\s+|)>/g, " }, ")
      .replace(/{ >/g, "null,")
      .replace(/className:/g, "className: ")
      .replace(/onClick:/g, "onClick: ")
      .replace(/<\/\w+>/g, "),")
      .replace(/(\w+)>/g, "")
      .replace(/(\w+)>(.*?)</g, '$1: "$2", ')
      .replace(/>\s+</g, ",")
      .replace(/;\s*,/g, ",")
      .replace(/­/g, "")
      .replace(/,\s*\)/g, ")");

    let regEx = /},\s(.+?)\)/g;
    let textNodes = jsCode.match(regEx);
    let copy = textNodes;
    if(textNodes) {
      const filtered = textNodes.map((node) =>
        node.match(/},\s(.+?)\)/)[1].trim()
      );
      filtered
        .map((item, i) => {
          return copy[i].replace(item, `'${item}'`);
        })
        .forEach((item, i) => {
          jsCode = jsCode.replace(copy[i], item);
        });
    
    }
    
    return jsCode;
  }
  /**
   * Converts a camel case string to a hyphenated string.
   * @param {string} key - The camel case string to convert.
   * @return {string} The hyphenated string.
   *
   */
  const fromCamelCase = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .split(" ")
      .join("-")
      .toLowerCase();
  };

  /**
   * Creates an element with the specified type, props and children.
   * @param {string} type - The type of element to create.
   * @param {Object} props - The properties to apply to the element.
   * @param {...any} children - The children to add to the element.
   * @return {Element} The newly created element.
   */
  const createElement = (type, props, ...children) => {
    const element = document.createElement(type);
    Object.keys(props || {}).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        element.addEventListener(key.slice(2).toLowerCase(), props[key]);
      } else if (key === "className") {
        element.className = props[key];
      } else {
        element.setAttribute(fromCamelCase(key), props[key]);
      }
    });

    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });

    return element;
  };

  /**
   * Renders a component to the specified container.
   * @param {Function|Element} component - The component to render.
   * @param {string|Element} container - The container to render the component to.
   * @param {Function} callback - A callback function to execute after the component has been rendered.
   */

  const render = (component, container, callback) => {
    if (callback && typeof callback === "function") {
      callback();
    }
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    if (typeof component === "function") {
      const element = component();
      if (container) {
        container.appendChild(element);
      }
    } else if (typeof component === "object" && component instanceof Element) {
      if (container) {
        container.appendChild(component);
      }
    }
  };

  console.log(
    "%c You are using SimplyJS framework in the browser.\nFor complete documentations, visit on https://github.com/aldrin112602/SimplyJS",
    "color: #fff; font-size: .8rem; background: #222;"
  );
  /**
   * export the render function
   */
  return { render };
})();
