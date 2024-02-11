// @flow
import * as React from 'react';
import styles from "./intro-right.module.scss"
import Image from "@/assets/images/food-image.png";
import ImageWebp from "@/assets/images/food-image.webp";
import ImageSmallWebp from "@/assets/images/food-small.webp";
import ImageSmall from "@/assets/images/food-small.png";
import {ReactComponent as Graph} from "@/assets/images/graph.svg";
import Order from "@/components/blocks/order/order";
import GraphDate from "@/components/ui/graph-date/graph-date";
import Zoom from "@/components/ui/zoom/zoom";

const IntroRight: React.FC = () => {
    return (
        <div className={styles.visualization}>
            <div className={styles.imageWrapper}>
                <picture>
                    <source srcSet={ImageWebp}/>
                    <img className={styles.image} src={Image} alt="Изображение блюда" width={430} height={443}/>
                </picture>
            </div>
            <h2 className={styles.title}>Track your order</h2>
            <div className={styles.orderWrapper}>
                <Order name={'Chicken Hell'} time={'3:09 PM'} status={'On The Way'} image={ImageSmall} imageWebp={ImageSmallWebp}/>
            </div>
            <h2 className={styles.title}>All statistics</h2>
            <div className={styles.graph}>
                <div className={styles.date}>
                    <GraphDate child={'Main'} active={true} />
                    <GraphDate child={'Weekly'} active={false} />
                    <GraphDate child={'Monthly'} active={false}/>
                    <GraphDate child={'Yearly'} active={false} />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.lines}></div>
                    <Graph/>
                </div>
                <div className={styles.zoomWrapper}>
                    <Zoom child={'2D'} active={true} />
                    <Zoom child={'4D'} active={false} />
                    <Zoom child={'5D'} active={false} />
                    <Zoom child={'6D'} active={false} />
                    <Zoom child={'7D'} active={false} />
                </div>
            </div>
        </div>
    );
};

export default IntroRight;