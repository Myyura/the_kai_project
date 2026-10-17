---
sidebar_label: "2016年8月実施 II-3-ABCD（物理数学・力学・量子力学・電磁気学）"
tags:
  - Kyoto-University
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Infinite-Series-from-Fourier-Series
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Quantum-Mechanics.Finite-Dimensional-Hamiltonian
  - Physics.Electromagnetism.Method-of-Images
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年8月実施 問題II-3-ABCD

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### II-3A（物理数学）

(1) 区間 $-1\le x\le1$ で $f(x)=x^2$ と表される周期2の周期関数をフーリエ級数展開せよ。

(2) 問 (1) の結果を用いて、以下の値を求めよ。

$$
\sum_{n=1}^{\infty}\frac1{n^2}\tag{A}
$$

### II-3B（力学）

複数の質点がばねでつながった系の振動について考える。その最も簡単な例は、質量 $m$ の質点1と質点2が弾性定数 $K$ のばねによって図1のように壁につながれ、質点間は弾性定数が $G$（$G\ne K$）のばねでつながっている系である。ただし、二つの壁の間の距離は三つのばねの自然長の和に等しいものとする。この系に縦振動（質点の $x$ 方向の振動）モードは二つあり、その各々における質点の振動の様子は図2のように描写される。図2の矢印は質点 $j$ の変位ベクトル $x_j$（$j=1,2$）を表わす。

これを参考に、図3のように、図1の弾性定数 $G$ のばねが質量 $2m$ の質点3を伴った二本の弾性定数 $G$ のばねに置き換えられた系を考える。ただし、この場合においても壁の間の距離は四つのばねの自然長の和に等しいものとする。図3の系の各縦振動モードの固有振動数を求めよ。また、各モードにおける各質点の変位ベクトル $x_j$（$j=1,2,3$）の様子を図2の例にならって図示せよ。ただし、結果は $G\gg K$ の近似の下で導出すればよいものとする。

![図1・図2・図3：二質点系、その振動モード、および三質点系（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-II-3B-fig1-3.png)

### II-3C（量子力学）

大きさ $1/2$ の2個のスピン $\hat{\mathbf s}_1,\hat{\mathbf s}_2$ からなる系のハミルトニアンが、式 (B) で与えられている。相互作用の強さとして $J>0$ とし、$0\le x\le1$ とする。

$$
\mathcal H=(1-x)J\hat s_1^z\hat s_2^z+xJ\hat{\mathbf s}_1\cdot\hat{\mathbf s}_2\tag{B}
$$

ここで、$\hat s_1^z,\hat s_2^z$ はスピンの $z$ 成分を表す。

(1) $x=0$ の場合について、エネルギー（固有値）と縮退度を求めよ。ただし、$\hat s_1^z$ と $\hat s_2^z$ はそれぞれ固有値 $\pm1/2$ を取りうることに注意せよ。

(2) $x=1$ の場合について、エネルギー（固有値）と縮退度を求めよ。ただし、大きさ $S$ のスピンに対して $\hat{\mathbf S}^2$ の固有値が $S(S+1)$ であることに注意せよ。また関係式 $(\hat{\mathbf s}_1+\hat{\mathbf s}_2)^2=\hat{\mathbf s}_1^2+\hat{\mathbf s}_2^2+2\hat{\mathbf s}_1\cdot\hat{\mathbf s}_2$ を使ってよい。

(3) $x$ が0から1まで変化したとき、エネルギー準位がどのように変わるかを、横軸を $x$、縦軸をエネルギーとして縮退度も含めて概略を図示せよ。

### II-3D（電磁気学）

図のような座標系 $(x,y,z)$ において、接地した2枚の半無限導体を直交させたもの（$zx$ 面（$x>0$）と $yz$ 面（$y>0$））を考える。ここで、点電荷 $Q$ を位置 $(a,b,0)$ に置いた場合の電位を求めたい。なお、図において矢印の方向をそれぞれ $x$ と $y$ の正方向とする。

![接地された直交導体と点電荷の配置（原題図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-II-3D-fig.png)

(1) 導体によって区切られ、点電荷 $Q$ がある領域、すなわち $x>0$、かつ $y>0$、における電位を求めよ。

(2) 問 (1) で求めた電位が導体のある位置（$zx$ 面（$x>0$）および $yz$ 面（$y>0$））で0になっていることを示せ。

#### 题目描述

**II-3A（物理数学）**

(1) 将周期为2、在区间 $-1\le x\le1$ 内表示为 $f(x)=x^2$ 的周期函数展开为傅里叶级数。

(2) 使用第 (1) 问的结果，求

$$
\sum_{n=1}^{\infty}\frac1{n^2}.\tag{A}
$$

**II-3B（力学）**

考虑多个质点通过弹簧连接的系统的振动。最简单的例子如图1：质量为 $m$ 的质点1和质点2各通过弹性系数为 $K$ 的弹簧与墙相连，两个质点之间由弹性系数为 $G$（$G\ne K$）的弹簧连接。两墙间的距离等于三根弹簧的自然长度之和。该系统有两个纵振动（质点沿 $x$ 方向振动）模态，各模态中的质点运动如图2。图2中的箭头表示质点 $j$ 的位移矢量 $x_j$（$j=1,2$）。

参考此例，考虑图3的系统：将图1中弹性系数为 $G$ 的弹簧，替换为两根弹性系数为 $G$ 的弹簧及它们中间质量为 $2m$ 的质点3。此时两墙间的距离也等于四根弹簧的自然长度之和。求图3系统各纵振动模态的固有频率，并仿照图2画出各模态中各质点位移矢量 $x_j$（$j=1,2,3$）的情况。结果只需在 $G\gg K$ 的近似下导出。图1–3见上方原图。

**II-3C（量子力学）**

由两个大小为 $1/2$ 的自旋 $\hat{\mathbf s}_1,\hat{\mathbf s}_2$ 构成的系统的哈密顿量由式 (B) 给出。相互作用强度 $J>0$，且 $0\le x\le1$。

$$
\mathcal H=(1-x)J\hat s_1^z\hat s_2^z+xJ\hat{\mathbf s}_1\cdot\hat{\mathbf s}_2.\tag{B}
$$

其中 $\hat s_1^z,\hat s_2^z$ 表示自旋的 $z$ 分量。

(1) 求 $x=0$ 时的能量本征值及简并度。注意 $\hat s_1^z$ 和 $\hat s_2^z$ 的本征值分别可以取 $\pm1/2$。

(2) 求 $x=1$ 时的能量本征值及简并度。注意对于大小为 $S$ 的自旋，$\hat{\mathbf S}^2$ 的本征值为 $S(S+1)$。可以使用关系式 $(\hat{\mathbf s}_1+\hat{\mathbf s}_2)^2=\hat{\mathbf s}_1^2+\hat{\mathbf s}_2^2+2\hat{\mathbf s}_1\cdot\hat{\mathbf s}_2$。

(3) 当 $x$ 从0变化到1时，能级如何变化？以 $x$ 为横轴、能量为纵轴，画出概略图并标明简并度。

**II-3D（电磁学）**

在图示坐标系 $(x,y,z)$ 中，将两片接地的半无限导体垂直放置，分别位于 $zx$ 面（$x>0$）和 $yz$ 面（$y>0$）。要计算点电荷 $Q$ 放在 $(a,b,0)$ 时的电势。图中箭头分别表示 $x$ 和 $y$ 的正方向，见上方原图。

(1) 求导体所分隔出的、包含点电荷 $Q$ 的区域，即同时满足 $x>0$ 和 $y>0$ 的区域中的电势。

(2) 证明第 (1) 问所得电势在导体所在位置，即 $zx$ 面（$x>0$）和 $yz$ 面（$y>0$）上为0。

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
\boxed{\begin{aligned}
\Omega_\pm^2&=\frac{K+2G\pm\sqrt{K^2+4G^2}}{2m},\\
(u,u,v)&\propto\left(1,1,\frac{K+G-m\Omega_\pm^2}{G}\right).
\end{aligned}}
$$

$G\gg K$ では

$$
\begin{aligned}
\Omega_-&\simeq\sqrt{\frac K{2m}},\quad (1,1,1),\\
\Omega_a&\simeq\sqrt{\frac Gm},\quad (1,-1,0),\\
\Omega_+&\simeq\sqrt{\frac{2G}{m}},\quad (1,1,-1).
\end{aligned}
$$

普通の振動数を用いる場合は $f_j=\Omega_j/(2\pi)$ である。

![三質点の縦振動モード](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-II-3-modes.svg)

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

![二スピン系のエネルギー準位](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/phys/2017/201608-II-3-spin-levels.svg)

### II-3D

#### (1)

鏡像電荷を $(-a,b,0)$ に $-Q$、$(a,-b,0)$ に $-Q$、$(-a,-b,0)$ に $+Q$ と置く。求める電位は

$$
\boxed{\begin{aligned}
V(x,y,z)=\frac{Q}{4\pi\epsilon_0}\biggl[&
\frac1{\sqrt{(x-a)^2+(y-b)^2+z^2}}\\
&-\frac1{\sqrt{(x+a)^2+(y-b)^2+z^2}}\\
&-\frac1{\sqrt{(x-a)^2+(y+b)^2+z^2}}\\
&+\frac1{\sqrt{(x+a)^2+(y+b)^2+z^2}}
\biggr].
\end{aligned}}
$$

#### (2)

$x=0$ では第一項と第二項、第三項と第四項が打ち消す。$y=0$ では第一項と第三項、第二項と第四項が打ち消すので、いずれも $V=0$。鏡像はすべて対象領域外にあり、無限遠で $V\to0$ となるため、一意性定理により上式が解である。

## **Reference**

- [京都大学公式問題（2017年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
