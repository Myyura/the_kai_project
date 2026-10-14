---
sidebar_label: "2017年度 II-3-ABCD（物理数学・力学・量子力学・電磁気学）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Infinite-Series-from-Fourier-Series
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Quantum-Mechanics.Finite-Dimensional-Hamiltonian
  - Physics.Electromagnetism.Method-of-Images
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年度 問題II-3-ABCD

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（物理数学）

1. $-1\le x\le1$ で $f(x)=x^2$ となる周期 $2$ の関数をフーリエ級数展開せよ。
2. その結果を用いて $\sum_{n=1}^{\infty}n^{-2}$ を求めよ。

### II-3B（力学）

一直線上の二つの固定壁の間に、左から「ばね $K$、質点 $1$（質量 $m$）、ばね $G$、質点 $3$（質量 $2m$）、ばね $G$、質点 $2$（質量 $m$）、ばね $K$」を並べて接続する。$K,G>0$、$G\ne K$ で、壁間距離は四つのばねの自然長の和である。質点はこの直線方向に運動する。

各縦振動モードの固有振動数と変位ベクトル $x_j$（$j=1,2,3$）を求め、各質点の動きを矢印で図示せよ。結果は $G\gg K$ の近似でよい。（原図の比較用二質点系は中央の「ばね $G$、質点 $3$、ばね $G$」を一本のばね $G$ に置き換えたもので、同方向・逆方向の二モードを持つ。）

### II-3C（量子力学）

大きさ $1/2$ の二つのスピンについて

$$
H=(1-x)J\hat s_1^z\hat s_2^z+xJ\hat{\mathbf s}_1\cdot\hat{\mathbf s}_2,\qquad J>0,\quad0\le x\le1
$$

とする。$\hat s_i^z$ の固有値は $\pm1/2$、$\hat{\mathbf S}^2$ の固有値は $S(S+1)$ である。

1. $x=0$ のエネルギーと縮退度を求めよ。
2. $x=1$ のエネルギーと縮退度を求めよ。$({\mathbf s}_1+{\mathbf s}_2)^2={\mathbf s}_1^2+{\mathbf s}_2^2+2{\mathbf s}_1\cdot{\mathbf s}_2$ を用いてよい。
3. $0\le x\le1$ でのエネルギー準位を、縮退度を含めて図示せよ。

### II-3D（電磁気学）

接地された二枚の半無限導体を、$zx$ 半平面（$x>0,y=0$）と $yz$ 半平面（$x=0,y>0$）に直交させる。点電荷 $Q$ を $(a,b,0)$（$a,b>0$）に置く。

1. 点電荷のある領域 $x>0,y>0$ の電位を求めよ。
2. 求めた電位が両導体上で零となることを示せ。

#### 题目描述

**II-3A：** (1) 将周期为 $2$、在 $[-1,1]$ 上等于 $x^2$ 的函数展开成傅里叶级数；(2) 用它求 $\sum_{n\ge1}1/n^2$。

**II-3B：** 两固定墙间从左到右连接：弹簧 $K$、质量 $m$ 的质点 $1$、弹簧 $G$、质量 $2m$ 的质点 $3$、弹簧 $G$、质量 $m$ 的质点 $2$、弹簧 $K$。墙距等于四弹簧自然长度之和，$K,G>0$。求纵振动各正常模频率及各质点的位移方向，可取 $G\gg K$。比较图中的两质点系统将中间组合换成单根弹簧 $G$，有同相、反相两模态。

**II-3C：** 两个自旋 $1/2$ 的哈密顿量如上，$J>0,0\le x\le1$。分别求 $x=0$、$x=1$ 的能级与简并度，再画出全过程的能级变化。自旋算符无量纲，$s_i^z=\pm1/2$。

**II-3D：** 两片接地导体位于 $y=0,x>0$ 及 $x=0,y>0$，点电荷 $Q$ 位于 $(a,b,0)$，$a,b>0$。(1) 求第一象限区域电势；(2) 验证导体上电势为零。

## **Kai**

### II-3A

#### (1)

関数は偶関数なので余弦級数となる。係数は

$$
\frac{a_0}{2}=\frac13,\qquad
 a_n=\int_{-1}^1x^2\cos(n\pi x)\,dx=\frac{4(-1)^n}{n^2\pi^2}.
$$

したがって

$$
\boxed{f(x)=\frac13+\frac4{\pi^2}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos(n\pi x).}
$$

#### (2)

$x=1$ を代入して $1=1/3+(4/\pi^2)\sum n^{-2}$ より

$$
\boxed{\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}.}
$$

### II-3B

変位の順序を $(x_1,x_2,x_3)$ とする。運動方程式は

$$
\begin{aligned}
m\ddot x_1&=-(K+G)x_1+Gx_3,\\
m\ddot x_2&=-(K+G)x_2+Gx_3,\\
2m\ddot x_3&=G(x_1+x_2)-2Gx_3.
\end{aligned}
$$

反対称モードは

$$
\boxed{\Omega_a^2=\frac{K+G}{m},\qquad (x_1,x_2,x_3)\propto(1,-1,0).}
$$

対称モードでは $x_1=x_2=u$、$x_3=v$ とし、

$$
\begin{pmatrix}K+G-m\Omega^2&-G\\-G&G-m\Omega^2\end{pmatrix}
\begin{pmatrix}u\\v\end{pmatrix}=0.
$$

よって

$$
\boxed{\Omega_\pm^2=\frac{K+2G\pm\sqrt{K^2+4G^2}}{2m},\qquad
(u,u,v)\propto\left(1,1,\frac{K+G-m\Omega_\pm^2}{G}\right).}
$$

$G\gg K$ では

$$
\Omega_-\simeq\sqrt{\frac K{2m}},\quad (1,1,1),\qquad
\Omega_a\simeq\sqrt{\frac Gm},\quad (1,-1,0),\qquad
\Omega_+\simeq\sqrt{\frac{2G}{m}},\quad (1,1,-1).
$$

普通の振動数を用いる場合は $f_j=\Omega_j/(2\pi)$ である。

![三質点の縦振動モード](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2017-II-3-modes.svg)

### II-3C

#### (1)

$H=J\hat s_1^z\hat s_2^z$ だから、平行スピンは $J/4$、反平行スピンは $-J/4$。

$$
\boxed{E=J/4\ (2\text{重}),\qquad E=-J/4\ (2\text{重}).}
$$

#### (2)

$H=\frac J2[\hat{\mathbf S}^2-3/2]$ より

$$
\boxed{E=-3J/4\ (S=0,\ 1\text{重}),\qquad E=J/4\ (S=1,\ 3\text{重}).}
$$

#### (3)

$|\uparrow\uparrow\rangle,|\downarrow\downarrow\rangle$ のエネルギーは常に $J/4$。反平行スピン部分の行列は

$$
J\begin{pmatrix}-1/4&x/2\\x/2&-1/4\end{pmatrix}.
$$

したがって

$$
\boxed{E_{\rm s}=-\frac J4-\frac{Jx}{2},\qquad
E_{{\rm t},0}=-\frac J4+\frac{Jx}{2},\qquad E_{{\rm t},\pm1}=\frac J4.}
$$

$0<x<1$ の縮退度は順に $1,1,2$。端点では (1)、(2) の縮退に戻る。

![二スピン系のエネルギー準位](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2017-II-3-spin-levels.svg)

### II-3D

#### (1)

鏡像電荷を $(-a,b,0)$ に $-Q$、$(a,-b,0)$ に $-Q$、$(-a,-b,0)$ に $+Q$ と置く。求める電位は

$$
\boxed{V(x,y,z)=\frac{Q}{4\pi\epsilon_0}\left[
\frac1{\sqrt{(x-a)^2+(y-b)^2+z^2}}
-\frac1{\sqrt{(x+a)^2+(y-b)^2+z^2}}
-\frac1{\sqrt{(x-a)^2+(y+b)^2+z^2}}
+\frac1{\sqrt{(x+a)^2+(y+b)^2+z^2}}
\right].}
$$

#### (2)

$x=0$ では第一項と第二項、第三項と第四項が打ち消す。$y=0$ では第一項と第三項、第二項と第四項が打ち消すので、いずれも $V=0$。鏡像はすべて対象領域外にあり、無限遠で $V\to0$ となるため、一意性定理により上式が解である。

## **Reference**

- [京都大学公式問題（2017年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
