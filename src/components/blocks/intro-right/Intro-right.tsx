// @flow
import * as React from 'react';
import styles from "./intro-right.module.scss"
import FoodImage from "@/assets/images/food-image.png";
import FoodImageWebp from "@/assets/images/food-image.webp";
import {ReactComponent as Graph} from "@/assets/images/graph.svg";
import Order from "@/components/blocks/order/order";
import GraphDate from "@/components/ui/graph-date/graph-date";
import Zoom from "@/components/ui/zoom/zoom";
import {orders} from "@/mock/mock";
import Image from 'react-image-webp';

const IntroRight: React.FC = () => {
    return (
        <div className={styles.visualization}>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={FoodImage} webp={FoodImageWebp} alt="Изображение блюда" width={430} height={443}/>
            </div>
            <h2 className={styles.title}>Track your order</h2>
            <ul className={styles.orderWrapper}>
                <Order order={orders[0]}/>
            </ul>
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