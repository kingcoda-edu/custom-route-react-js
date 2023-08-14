import { useRef, useEffect, useState } from "react";

const Controller = (props) => {

  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    window.addEventListener('popstate', (e) => {
    setPath(e.target.location.pathname);
    window.removeEventListener('popstate', () => {});
   });
  }, [path]);
  const matchUrl = (child) => { if (child.props.url === path) return child };
  let r = props.children.filter(matchUrl)[0];
  console.log(r);
  console.log(path);
  return r.props.renderElement;
}

const A = (props) => {
    const lina = useRef('');
    const process = (e) => {
        e.stopPropagation(); e.preventDefault();
        window.history.pushState(null, '', lina.current.href);
        window.dispatchEvent(new Event('popstate'));
    }
    return <>
    <a ref={lina} {...props} onClick={(e) => process(e)}>{props.children}</a>
    </>
}

export {A, Controller};
