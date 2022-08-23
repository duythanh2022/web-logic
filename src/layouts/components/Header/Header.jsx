import React from "react";
import Logo from "@/assets/img/logo.png";
import Notification from "@/assets/img/notification.png";
import menuItems from "@/config/MenuConfig";
import { Link } from "react-router-dom";
import {
  GlobalOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.scss";
const Header = () => {
  console.log("header", menuItems);
  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles.container}>
          <div className={styles.headerTop}>
            <div className={styles["header-top-title"]}>
              <GlobalOutlined /> <span>LEVENTS LOVE YOU!!!</span>
            </div>
            <div className={styles["header-top-buy"]}>
              <Link to="/">
                Buy Now <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["header-middle-menu"]}>
          <div></div>
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className={styles["menu-icons"]}>
            <div className={styles["icon-notification"]}>
              <img className={styles.notification} src={Notification} alt="" />
            </div>
            <div className="wish-list">
              <Link to="/">Wishlist</Link>
            </div>
            <div className="search-icon">
              <SearchOutlined />
            </div>
            <div className="cart-icon">
              <ShoppingCartOutlined />
            </div>
            <div className="user-icon">
              <UserOutlined />
            </div>
          </div>
        </div>
        <nav className={styles["multi-level-menu"]}>
          {
            menuItems.map((item,index)=>(
              <ul className="menu">
                <li>
                <Link to={item.path}>{item.display}</Link>
                </li>         
              </ul>
            ))
          }
         
        </nav>
      </div>
    </>
  );
};
export default Header;
