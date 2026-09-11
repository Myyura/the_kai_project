---
sidebar_label: '2014年8月実施 物理学4'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
  - Physics.Electromagnetism.Prism-and-Diffraction-Grating
---

# 東京大学 工学系研究科 2014年8月実施 物理学4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

真空中を伝わる光（平面波）が、入射角 $\theta_i$ で屈折率 $n$ の一様な媒質に入射し、屈折角 $\theta_r$ で屈折する。真空中と媒質中の光速はそれぞれ $c,v$ とする。角度は境界面の法線から測る。

1. ホイヘンスの原理を用いて、$\theta_i,\theta_r,n$ の関係（スネルの法則）を導け。
2. 光子のエネルギーと運動量を $\hbar\omega,\hbar k$ とする。$\omega$ は角周波数、$k$ は波数、$\hbar=h/(2\pi)$、$h$ はプランク定数である。真空中の運動量 $\hbar k_0$ と媒質中の運動量 $\hbar k_1$ の関係を、$\theta_i,\theta_r,c,v$ の全部または一部で表せ。

### II

真空中の直角プリズムの頂角を $\alpha$、屈折率を $n$ とする。図のように波長 $\lambda$ の光が垂直な面に入射角 $\theta_i$ で入り、斜辺から出射角 $\theta_o$ で出る。次に、屈折率 $n$、頂角 $\beta$、幅 $d$ の微小プリズムを隙間なく周期的に並べた回折格子に、光を垂直入射させる。

1. 入射角と出射角の測定値から、$n$ を $\theta_i,\theta_o,\alpha$ で表せ。
2. $0\le\theta_i<90^\circ$ で入射角を変えると、ある範囲では斜辺からの透過光がなくなり、底辺から出射する。このときの $\theta_i$ の範囲を $\alpha,n$ で表せ。
3. 回折格子からの一次回折光と微小プリズムによる屈折光が同方向に進むとき、$\beta$ を $d,n,\lambda$ で表せ。$d\gg\lambda$、$\beta\ll1$ と近似してよい。

![平面波の屈折、直角プリズム、微小プリズム回折格子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2015/kyotsu_201408_phys_4_optics_audited.svg)

#### 题目描述

### I

真空中的平面光波以入射角 $\theta_i$ 射入折射率为 $n$ 的均匀介质，折射角为 $\theta_r$。真空和介质中的光速分别为 $c,v$。角度均相对于界面法线测量。

1. 用惠更斯原理推导 $\theta_i,\theta_r,n$ 之间的斯涅尔折射定律。
2. 光子的能量、动量分别为 $\hbar\omega,\hbar k$，其中 $\omega$ 为角频率，$k$ 为波数，$\hbar=h/(2\pi)$，$h$ 为普朗克常数。用 $\theta_i,\theta_r,c,v$ 中的全部或部分量表示真空中动量 $\hbar k_0$ 与介质中动量 $\hbar k_1$ 的关系。

### II

真空中的直角棱镜折射率为 $n$，顶角为 $\alpha$。波长 $\lambda$ 的光如图从竖直面以入射角 $\theta_i$ 入射，从斜边以出射角 $\theta_o$ 射出。另将折射率 $n$、顶角 $\beta$、宽度 $d$ 的微小棱镜无间隙地周期排列成衍射光栅，使光垂直入射。

1. 用测得的 $\theta_i,\theta_o$ 及 $\alpha$ 表示棱镜折射率 $n$。
2. 在 $0\le\theta_i<90^\circ$ 内改变入射角时，某一角度范围内斜边不再有透射光，光改由底边射出。用 $\alpha,n$ 给出这一范围。
3. 若光栅的一级衍射光与微棱镜的折射光传播方向相同，用 $d,n,\lambda$ 表示 $\beta$。允许使用 $d\gg\lambda$ 和 $\beta\ll1$ 的近似。

## **Kai**

### I

**1.** 入射波面の一端が先に境界に達してから他端が達するまでを $\Delta t$、境界上の二点間距離を $\ell$ とする。ホイヘンスの素元波の半径より、

$$
\sin\theta_i=\frac{c\Delta t}{\ell},\qquad
\sin\theta_r=\frac{v\Delta t}{\ell}.
$$

したがって、

$$
\boxed{\frac{\sin\theta_i}{\sin\theta_r}=\frac cv=n,\qquad
\sin\theta_i=n\sin\theta_r.}
$$

**2.** 境界で角周波数は変わらず、$ck_0=vk_1=\omega$ なので、

$$
\boxed{\hbar k_1=\frac cv\,\hbar k_0=n\hbar k_0,\qquad
\hbar k_0\sin\theta_i=\hbar k_1\sin\theta_r.}
$$

### II

**1.** プリズム内で第一面、第二面の法線となす角を $r_1,r_2$ とすると、

$$
r_1+r_2=\alpha,\qquad n\sin r_1=\sin\theta_i,\qquad
n\sin r_2=\sin\theta_o.
$$

よって $\sin\theta_o=\sin\alpha\sqrt{n^2-\sin^2\theta_i}-\cos\alpha\sin\theta_i$ から、

$$
\boxed{n=\frac{\sqrt{\sin^2\theta_i+\sin^2\theta_o
+2\sin\theta_i\sin\theta_o\cos\alpha}}{\sin\alpha}.}
$$

**2.** 臨界角 $\theta_c=\sin^{-1}(1/n)$ とおく。斜辺で全反射する条件は、

$$
\boxed{\alpha-\sin^{-1}\!\left(\frac{\sin\theta_i}{n}\right)>\theta_c.}
$$

すなわち、$D=n\sin(\alpha-\theta_c)=\sqrt{n^2-1}\sin\alpha-\cos\alpha$ とおけば、

$$
\boxed{\begin{cases}
\text{該当範囲なし},&\alpha\le\theta_c,\\
0\le\theta_i<\sin^{-1}D,&\theta_c<\alpha<2\theta_c,\\
0\le\theta_i<\pi/2,&\alpha\ge2\theta_c.
\end{cases}}
$$

中段の上端では第二面への入射角が臨界角となり、屈折光は斜辺に沿う。

**3.** 一次回折角を $\delta$ とすると $d\sin\delta=\lambda$ より $\delta\simeq\lambda/d$。微小プリズムには第一面へ垂直入射するため、その偏角は

$$
\delta=\sin^{-1}(n\sin\beta)-\beta\simeq(n-1)\beta.
$$

したがって、

$$
\boxed{\beta\simeq\frac{\lambda}{(n-1)d}.}
$$

