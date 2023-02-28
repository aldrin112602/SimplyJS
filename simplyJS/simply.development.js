const Simply = (() => {
  const findScript = () => {
    return document.querySelectorAll('script[type="text/simply"]');
  };
  if (findScript().length > 0) {
    const src = [...findScript()].map((simplyScript) => {
      return simplyScript.hasAttribute("src")
        ? { hasSrc: true, content: null, src: simplyScript.src }
        : { hasSrc: false, content: simplyScript.innerHTML, src: null };
    });

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
      console.log(jsxToJs(content));
      try {
        eval(jsxToJs(content));
      } catch (err) {
        console.error(err);
        console.trace();
      }
    });
  }

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
    return jsCode;
  }

  const fromCamelCase = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .split(" ")
      .join("-")
      .toLowerCase();
  };

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

  const render = (component, container, callback) => {
    if (callback && typeof callback === "function") {
      // Execute the callback function before rendering the component
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
  return { render };
})();
