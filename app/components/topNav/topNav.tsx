"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./topNav.module.css";
import logo from "@/app/images/BLL_Logo.png";

type NavItem = { label: string; href: string };

const storeMain: NavItem[] = [
  { label: "Shop the Latest", href: "#" },
  { label: "Mac", href: "#" },
  { label: "iPad", href: "#" },
  { label: "iPhone", href: "#" },
];

const storeQuick: NavItem[] = [
  { label: "Find a Store", href: "#" },
  { label: "Order Status", href: "#" },
  { label: "Trade In", href: "#" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLElement | null>(null);

  // close on outside click
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={styles.topnav} ref={rootRef as any}>
      <nav className={styles.navInner} aria-label="Primary">
        <Link className={styles.brand} href="/" aria-label="Home">
          <Image src={logo} alt="" width={36} height={36} priority></Image>
        </Link>

        <div className={styles.links}>
          
          <Link href="#" className={styles.link}>News</Link>
          <Link href="#" className={styles.link}>Rankings</Link>
          
          {/* Dropdown */}
          <div className={styles.dropdown}>
            <button
              type="button"
              className={styles.ddTrigger}
              aria-haspopup="true"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              onMouseEnter={() => setOpen(true)}
            >
              Players
            </button>

            {/* “Apple-like” fixed panel under the bar */}
            {/* <div
              id={panelId}
              className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
              role="menu"
              onMouseLeave={() => setOpen(false)}
            >
              <div className={styles.panelInner}>
                <div className={styles.col}>
                  <div className={styles.eyebrow}>Shop</div>
                  {storeMain.map((i) => (
                    <Link key={i.label} className={styles.panelLink} href={i.href}>
                      {i.label}
                    </Link>
                  ))}
                </div>
                <div className={styles.col}>
                  <div className={styles.eyebrow}>Quick Links</div>
                  {storeQuick.map((i) => (
                    <Link key={i.label} className={styles.panelLink} href={i.href}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}
          </div>

          <Link href="/hall_of_fame" className={styles.link}>Hall of Fame</Link>
          <Link href="#" className={styles.link}>Merchandise</Link>
          <Link href="#" className={styles.link}>About</Link>
        </div>

        {/* <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">⌕</button>
          <button className={styles.iconBtn} aria-label="Bag">👜</button>
        </div> */}
      </nav>
    </header>
  );
}
