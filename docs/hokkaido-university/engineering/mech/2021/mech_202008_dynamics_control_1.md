---
sidebar_label: "2020年8月実施 機械力学・制御工学 問1"
tags:
  - Hokkaido-University
  - Physics.Mechanics.Rigid-Body-Rotation-and-Rolling
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 機械力学・制御工学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

半径 $R$、質量 $M$ の一様な円板が水平な床に接し、滑らずに転がる。円板中心Oの鉛直上方、距離 $a$ にある点Eを水平ばね $k_1$ で左壁につなぎ、中心Oを水平ばね $k_2$ で右壁につなぐ。平衡位置では両ばねは自然長である。円板を右へ微小距離 $x$ 動かすと、時計回りに微小角 $\theta$ 回転する。静かに離すと床から離れずに振動する。床との摩擦力を $F$ とする。

1. 中心軸まわりの慣性モーメント $I=MR^2/2$ を導け。
2. 水平方向の並進運動方程式を求めよ。
3. 回転運動方程式を求めよ。
4. $F$ を含まない、$\theta$ に関する運動方程式を求めよ。
5. 固有角振動数 $\omega_0$ を求めよ。
6. ばね $k_1$ の取付点を円板の上端Dに移し、水平に左壁へつなぎ直す。その後の固有角振動数が $1.5\omega_0$ となった。$k_1=k_2$ のとき、元の距離 $a$ を $R$ で表せ。

#### 题目描述

半径 $R$、质量 $M$ 的均匀圆盘在水平地面无滑动滚动。圆心正上方距离 $a$ 的E点通过水平弹簧 $k_1$ 接左墙，圆心通过水平弹簧 $k_2$ 接右墙，平衡时均为原长。盘向右位移 $x$ 时顺时针转角为 $\theta$。求转动惯量、平动和转动方程，消去地面摩擦力，求固有角频率。将左弹簧接点移到圆盘最上端后，固有角频率变为原来的1.5倍；两弹簧刚度相同时，求原接点高度 $a$。

## **Kai**

### (1)

面密度 $M/(\pi R^2)$ の同心円環を積分すると

$$
\boxed{I=\int_0^Rr^2\frac{M}{\pi R^2}2\pi r\,dr=\frac12MR^2}.
$$

### (2), (3)

摩擦力 $F$ を右向き正とする。ばねの微小伸びはそれぞれ $x+a\theta$ と $x$ だから

$$
\boxed{M\ddot x=-k_1(x+a\theta)-k_2x+F}.
$$

時計回りを正とする中心まわりのモーメントは

$$
\boxed{I\ddot\theta=-k_1a(x+a\theta)-FR}.
$$

### (4), (5)

滑りなしの拘束 $x=R\theta$ と並進の式を使って $F$ を消去すると

$$
\boxed{\frac32MR^2\ddot\theta+
[k_1(R+a)^2+k_2R^2]\theta=0},
$$

$$
\boxed{\omega_0=\sqrt{\frac{2[k_1(R+a)^2+k_2R^2]}{3MR^2}}}.
$$

運動エネルギー $\tfrac12(I+MR^2)\dot\theta^2$ とばねエネルギー $\tfrac12[k_1(R+a)^2+k_2R^2]\theta^2$ からも同じ式を得る。

### (6)

上端に移すと $R+a$ が $2R$ になる。$k_1=k_2=k$ より

$$
\frac{\omega_1^2}{\omega_0^2}
=\frac{5R^2}{(R+a)^2+R^2}=\frac94.
$$

$a>0$ を満たす根は

$$
\boxed{a=\frac{\sqrt{11}-3}{3}R\simeq0.106R}.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 4ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
