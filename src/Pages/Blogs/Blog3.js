import React, { Component } from 'react';
import { Image } from "react-bootstrap";

class Blog1 extends Component {
    render() {
        return (
            <>
            <div className='text-center'>
                <Image src="https://c8.alamy.com/comp/BE4PYY/older-man-reading-newspaper-with-angry-expression-BE4PYY.jpg"
                    style={{ width: "40%", objectFit: "cover" }}></Image>
            </div>
            <div className='text-center' style={{width: "60%", margin: "50px auto"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur gravida erat nec quam aliquam, et varius felis scelerisque.
            Morbi commodo eros ac erat consequat maximus. In justo turpis, gravida in mi rutrum, imperdiet finibus sapien.
            Duis luctus magna sit amet tellus eleifend, ac egestas odio ullamcorper.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Nam fringilla, nulla quis vestibulum rutrum, nisl turpis dictum mi, 
            lobortis pulvinar justo est ut enim. Maecenas eget ipsum quis mauris consequat lacinia. 
            Ut fermentum auctor dui quis fringilla. Suspendisse ut bibendum erat. 
            Morbi sagittis leo ut magna malesuada dapibus. 
            Praesent pellentesque sapien vitae convallis condimentum. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean consectetur nibh sed diam luctus porttitor.
            </div>
            </>
        );
    }
}

export default Blog1;
