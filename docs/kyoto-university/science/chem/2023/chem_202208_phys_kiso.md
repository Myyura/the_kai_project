---
sidebar_label: "2022年8月実施 物理学 基礎"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Lorentz-Force-and-Charged-Particle-Motion
  - Physics.Electromagnetism.Crossed-Electric-and-Magnetic-Fields
  - Physics.Electromagnetism.Cyclotron-Motion
  - Physics.Electromagnetism.Drude-Relaxation-Time
  - Physics.Electromagnetism.Hall-Angle
---
# 京都大学 理学研究科 化学専攻 2022年8月実施 物理学 基礎

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

以下の文章を読み、問 A～F に答えよ。

無限に広い平行平板電極を考え、電極面に平行な一様磁場を加えたときの、陰極から発生した電子の電極間での古典的な運動軌跡を考える。電極間の距離、電位差をそれぞれ $d,V$ とし、電子の質量を $m$、電荷を $-e$ とする。ここで、$e$ は電気素量である。時刻 $t=0$ において陰極面内に存在する電子の位置を原点とする直交座標系を考え、磁場の方向を $z$ 軸、それと直交する方向を $y$ 軸にとる（図1）。また $x$ 軸については、陰極から陽極へ向かう方向を正にとる。すなわち電場、磁場をそれぞれ

$$
\vec E=(\boxed{\text{ア}},0,0)\tag{1}
$$

$$
\vec B=(0,0,B)\tag{2}
$$

と表す。

![図1：時刻 t=0 における電子の位置を原点とする直交座標系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/chem/2023/chem_202208_phys_kiso_fig1.png)

電子の速度を $\vec v=(v_x,v_y,v_z)$ とし、時刻 $t=0$ において $|\vec v|=0$ とする。電極間が真空であり、他の粒子により電子の運動が妨げられることがないとすると、$x,y,z$ 成分の運動方程式は $A=V/(Bd)$、$\omega=eB/m$ を用いて、

$$
\frac d{dt}v_x=\boxed{\text{イ}}\tag{3}
$$

$$
\frac d{dt}v_y=\boxed{\text{ウ}}\tag{4}
$$

$$
\frac d{dt}v_z=0\tag{5}
$$

と表せる。式 (5) より、以下では $xy$ 平面内の運動のみを考えれば良い。①<u>上で述べた初期条件の下で式 (3) および式 (4) を連立させて解く</u>と、

$$
v_x=A\sin\omega t\tag{6}
$$

$$
v_y=A(1-\cos\omega t)\tag{7}
$$

が得られる。したがって、$x$ 軸、$y$ 軸方向の電子の軌道はそれぞれ

$$
x=\boxed{\text{エ}}\tag{8}
$$

$$
y=\frac A\omega(\omega t-\sin\omega t)\tag{9}
$$

となる。よって $B$ を0から徐々に増加させた場合を考えると、②<u>$x$ の最大値が電極間の距離 $d$ を下回った時点で、電極間の電流が急激に減少する</u>ことが予想される。

**問 A** 空欄アに入る数式を $d,V$ を用いて表せ。

**問 B** 空欄イおよびウに入る数式を $\omega,A,v_x,v_y$ を用いて表せ。導出過程も記述すること。

**問 C** 下線①に従って式 (6) および式 (7) を導出せよ。

**問 D** 空欄エに入る数式を $\omega,A,t$ を用いて表せ。導出過程も記述すること。

**問 E** $B$ が十分に大きいときの、式 (8) および式 (9) で表される $xy$ 平面内の電子の軌道の概形を最も適切に表している図を、以下の（あ）～（か）から選択して答えよ。

![軌道の選択肢（あ）、（い）、（う）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/chem/2023/chem_202208_phys_kiso_choices_a_c.png)

![軌道の選択肢（え）、（お）、（か）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/science/chem/2023/chem_202208_phys_kiso_choices_d_f.png)

**問 F** 下線②に関して、以下の (a) および (b) に答えよ。導出過程も記述すること。

(a) 電極間の電流が急激に減少する臨界磁場 $B_c$ を $d,V,m,e$ を用いて表せ。

(b) $B>B_c$ のときの電子の運動について、電子の速度に比例した現象論的な減衰項を式 (3) および式 (4) に付け加えて考える。

$$
\begin{cases}
\dfrac d{dt}v_x=\boxed{\text{イ}}-\dfrac1\tau v_x,\\[4pt]
\dfrac d{dt}v_y=\boxed{\text{ウ}}-\dfrac1\tau v_y
\end{cases}\tag{10}
$$

ただし、$\tau$ は減衰の時定数を表す。$\tau$ よりも十分に長い時間スケールでは電子は定常運動している（$dv_x/dt=dv_y/dt=0$）と見なして連立方程式 (10) を解き、電子の速度方向と $x$ 軸とのなす角が $45^\circ$ になるときの $\tau$ を $\omega$ を用いて表せ。

#### 题目描述

阅读下文，回答 A～F。

考虑无限大的平行平板电极，在平行于电极面的方向施加均匀磁场，研究阴极发射的电子在电极间的经典运动轨迹。电极间距和电势差分别为 $d,V$，电子质量为 $m$、电荷为 $-e$，$e$ 为元电荷。取电子在 $t=0$ 时位于阴极面内的位置为直角坐标系原点，$z$ 轴沿磁场方向，$y$ 轴与其垂直（图1），$x$ 轴正向由阴极指向阳极。电场和磁场分别写为

$$
\vec E=(\boxed{\text{ア}},0,0),\qquad\vec B=(0,0,B).
$$

电子速度为 $\vec v=(v_x,v_y,v_z)$，且 $t=0$ 时 $|\vec v|=0$。电极间为真空，电子运动不受其他粒子干扰。记 $A=V/(Bd)$、$\omega=eB/m$，则三个方向的运动方程为

$$
\frac{dv_x}{dt}=\boxed{\text{イ}},\qquad
\frac{dv_y}{dt}=\boxed{\text{ウ}},\qquad
\frac{dv_z}{dt}=0.
$$

由式 (5)，以下只需考虑 $xy$ 平面内运动。①<u>在上述初始条件下联立求解式 (3)、(4)</u>，可得

$$
v_x=A\sin\omega t,\qquad v_y=A(1-\cos\omega t).
$$

因而两个方向的电子轨迹为

$$
x=\boxed{\text{エ}},\qquad y=\frac A\omega(\omega t-\sin\omega t).
$$

若将 $B$ 从0逐渐增大，可以预期：②<u>当 $x$ 的最大值小于电极间距 $d$ 时，电极间电流会急剧减小</u>。

**问 A** 用 $d,V$ 表示空格ア中的式子。

**问 B** 用 $\omega,A,v_x,v_y$ 表示空格イ、ウ，并写出推导过程。

**问 C** 按照下划线①的步骤推导式 (6)、(7)。

**问 D** 用 $\omega,A,t$ 表示空格エ，并写出推导过程。

**问 E** 当 $B$ 充分大时，从原图（あ）～（か）中选择最适合表示式 (8)、(9) 所描述的 $xy$ 平面电子轨迹的图。

**问 F** 关于下划线②，回答 (a)、(b)，并写出推导过程。

(a) 用 $d,V,m,e$ 表示使电极间电流急剧减小的临界磁场 $B_c$。

(b) 在 $B>B_c$ 时，在式 (3)、(4) 中加入与电子速度成正比的唯象阻尼项：

$$
\begin{cases}
\dfrac{dv_x}{dt}=\boxed{\text{イ}}-\dfrac1\tau v_x,\\[4pt]
\dfrac{dv_y}{dt}=\boxed{\text{ウ}}-\dfrac1\tau v_y.
\end{cases}
$$

$\tau$ 为阻尼时间常数。在远大于 $\tau$ 的时间尺度上，认为电子处于定常运动（$dv_x/dt=dv_y/dt=0$），求解式 (10)。当电子速度与 $x$ 轴成 $45^\circ$ 时，用 $\omega$ 表示 $\tau$。

## **Kai**
### 問 A
$-V/d$

### 問 B
$\vec{v} \times \vec{B} = (v_yB, -v_xB, 0)$ なので、 $x,y$ 成分の運動方程式は

$$
\begin{aligned}
\frac{d}{dt} v_x
&= \frac{-e}{m} \left( - \frac{V}{d} + v_yB \right)
\\
&= \omega A - \omega v_y
\\
\frac{d}{dt} v_y
&= \frac{-e}{m} \left( - v_xB \right)
\\
&= \omega v_x
\end{aligned}
$$

となる。

### 問 C
虚数単位を $i$ とすると、問 B の運動方程式から、

$$
\begin{aligned}
\frac{d}{dt} (v_x + iv_y)
&= \omega A - \omega v_y + i \omega v_x
\\
&= i \omega (v_x + i v_y - iA)
\end{aligned}
$$

が得られるので、 $\xi = v_x + iv_y - iA$ とおくと、

$$
\begin{aligned}
\frac{d}{dt} \xi &= i \omega \xi
\end{aligned}
$$

となるので、これを積分すると、

$$
\begin{aligned}
\xi &= c e^{i \omega t}
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 } )
\end{aligned}
$$

を得る。
$t=0$ のとき $v_x=0, v_y=0$ であり $\xi=-iA$ であるから、 $c=-iA$ であり、

$$
\begin{aligned}
\xi &= -iA e^{i \omega t}
\\
\therefore \ \
v_x + iv_y - iA &= -iA \left( \cos \omega t + i \sin \omega t \right)
\\
\therefore \ \
v_x + iv_y &= A \sin \omega t + iA \left( 1 - \cos \omega t \right)
\end{aligned}
$$

となって、式 (6), (7) が得られる。

### 問 D
式 (6) を積分すると、

$$
\begin{aligned}
x = - \frac{A}{\omega} \cos \omega t + c
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 })
\end{aligned}
$$

となるが、 $t=0$ のとき $x=0$ であるから、 $c=A/\omega$ であり、

$$
\begin{aligned}
x = \frac{A}{\omega} (1 - \cos \omega t)
\end{aligned}
$$

を得る。

### 問 E
（い）。$v_y=A(1-\cos\omega t)\ge0$ なので $y$ は単調非減少であり、軌道にループはない。
また $0\le x\le2A/\omega$ で、$t=2\pi n/\omega$ では $x=0$ と $v_x=v_y=0$ が同時に成立する。したがって、$y$ の正方向に進むサイクロイドである。

### 問 F
#### (a)
式 (8) によると $x$ の最大値は $2A/\omega$ であるから、求める $B_c$ は

$$
\begin{aligned}
\frac{2A}{\omega} = d
\end{aligned}
$$

が成り立つときの $B$ であり、

$$
\begin{aligned}
B_c = \frac{1}{d} \sqrt{\frac{2mV}{e}}
\end{aligned}
$$

がわかる。

#### (b)
定常運動のとき、式 (10) は次のようになる：

$$
\begin{aligned}
0 &= \omega A - \omega v_y - \frac{1}{\tau} v_x
\\
0 &= \omega v_x - \frac{1}{\tau} v_y
\end{aligned}
$$

連立方程式を解くと、

$$
v_x=\frac{\omega A\tau}{1+\omega^2\tau^2},\qquad
v_y=\frac{\omega^2 A\tau^2}{1+\omega^2\tau^2}.
$$

電子の速度方向とx軸とのなす角が45°になるということは $v_x=v_y$ ということであり、
2番目の式から、 $\tau = 1 / \omega$ を得る。

## **Reference**

- [大学公式問題](https://www.kuchem.kyoto-u.ac.jp/master_past_issues/r5_butsuri_kiso.pdf)
