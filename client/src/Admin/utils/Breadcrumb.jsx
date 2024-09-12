import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((path) => path);
    let connectPath = "";

    return (
        <div aria-label="breadcrumb">
            <ol className="breadcrumb my-0">
                {pathnames.length > 1 && pathnames.map((path, index) => {                    
                    connectPath += `/${path}`;
                    let last = index === pathnames.length - 1;
                    let textCaps = path.charAt(0).toUpperCase() + path.slice(1);
                    //console.log(textCaps);
                    return (
                        <li className={`breadcrumb-item ${last ? 'active' : ''}`} key={index} aria-current={last ? 'page' : undefined}>
                            {!last ? (
                                <Link to={connectPath}>
                                    {textCaps}
                                </Link>
                            ) : (
                                <>
                                    {textCaps}
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Breadcrumb;
