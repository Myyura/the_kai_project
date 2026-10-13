---
sidebar_label: "機械力学 第2問"
tags:
  - Kobe-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 神戸大学 工学研究科 機械工学専攻 2019年度 機械力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

質量 $M$、重心回り慣性モーメント $I$ の剛体ばりを、重心の左 $L_1$、右 $L_2$ の位置で、それぞればね定数 $k_1,k_2$ のばねによって下から支える。重心の上向き変位を $x$、反時計回りの微小回転角を $\theta$ とする。

![ばね支持剛体ばりと重心に接続する動吸振器](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kobe-university/engineering/mech/2019/kobe2019_dynamics2.svg)

1. 自由振動の運動方程式を示せ。
2. 上下・回転運動が非連成となる条件を示せ。
3. (2)の条件のもとで、重心にばね $k_3$ とダンパ $c$ を介して質量 $m$ のおもりを接続する。おもりの上向き変位を $x_1$、地面の変位を $x_0=X\sin\omega t$ として、はりとおもりの上下運動方程式を示せ。
4. $c=0$ のとき、はりの上下変位振幅がゼロとなる条件を示せ。
5. 「運動方程式」「固有振動数」「振動」「変位」「自由度」を英訳せよ。

#### 题目描述

质量 $M$、重心转动惯量 $I$ 的刚性梁在重心左 $L_1$、右 $L_2$ 处由刚度 $k_1,k_2$ 的弹簧支承。重心向上位移为 $x$，逆时针微小转角为 $\theta$。（1）写自由振动方程；（2）求平动与转动解耦条件；（3）在此条件下，重心经并联弹簧 $k_3$、阻尼器 $c$ 连接质量 $m$，地基位移 $x_0=X\sin\omega t$，写两个平动方程；（4）无阻尼时求梁振幅为零的条件；（5）翻译题列五个力学术语。

## **Kai**

### (1)

静的つり合い位置からの変位を用いる。左右のばね取付点の変位は $x-L_1\theta$、$x+L_2\theta$。復元力と重心回りモーメントから


$$
\boxed{M\ddot x+(k_1+k_2)x+(k_2L_2-k_1L_1)\theta=0},
$$



$$
\boxed{I\ddot\theta+(k_2L_2-k_1L_1)x+(k_1L_1^2+k_2L_2^2)\theta=0}.
$$


### (2)

連成係数がゼロになる条件は $\boxed{k_1L_1=k_2L_2}$。

### (3)

$k_1,k_2$ の伸びは地面との相対変位で定まる。重心に取り付けた吸振器は回転モーメントを与えない。従って


$$
\boxed{M\ddot x+c(\dot x-\dot x_1)+(k_1+k_2)x+k_3(x-x_1)=(k_1+k_2)X\sin\omega t},
$$



$$
\boxed{m\ddot x_1+c(\dot x_1-\dot x)+k_3(x_1-x)=0}.
$$


### (4)

定常調和応答 $x=X_b\sin\omega t$、$x_1=X_1\sin\omega t$ を代入すると


$$
\begin{pmatrix}k_1+k_2+k_3-M\omega^2&-k_3\\-k_3&k_3-m\omega^2\end{pmatrix}
\begin{pmatrix}X_b\\X_1\end{pmatrix}=\begin{pmatrix}(k_1+k_2)X\\0\end{pmatrix}.
$$


非零の加振について $X_b=0$ とするには $k_3-m\omega^2=0$。従って


$$
\boxed{\omega=\sqrt{\frac{k_3}{m}}}.
$$


このとき行列式は $-k_3^2\ne0$、$X_1=-(k_1+k_2)X/k_3$ で、吸振器の復元力が地面からの加振力を打ち消す。無減衰系なので、任意の初期条件による自由振動まで消えるという条件ではなく、定常調和応答の振幅についての結果である。

### (5)

| 日本語 | 英語 |
| --- | --- |
| 運動方程式 | equation of motion |
| 固有振動数 | natural frequency |
| 振動 | vibration / oscillation |
| 変位 | displacement |
| 自由度 | degree of freedom |

## **Reference**

- [神戸大学公式問題の保存版：平成31年度 機械力学、PDF 2ページ](https://web.archive.org/web/20220524073517id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/5_H31_Machine.pdf)
