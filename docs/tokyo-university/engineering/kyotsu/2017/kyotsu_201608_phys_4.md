---
sidebar_label: '2016年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Monatomic-and-Diatomic-Lattice-Vibrations
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-Ground-State
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-First-Excited-State
---

# 東京大学 工学系研究科 2016年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

まず、質量 $M_0$ の質点 $N$ 個をバネ定数 $K_s$ のバネで結び、輪にした一次元格子を考える。$N$ は十分大きく、平衡位置で隣り合う質点間の距離は $a$ である。質点は輪に沿う方向だけに微小振動する。図の右向きを力と変位の正方向とし、$n$ 番目の質点の変位を $u_n$ とする。

1. $u_n$ の運動方程式を求めよ。
2. 波数 $k$、角振動数 $\omega$ の振動 $u_n=u\exp[-i(\omega t-kna)]$ を考え、$\omega$ を $k$ の関数で表せ。

次に、質量 $M_1,M_2$ の質点が交互に並び、同じバネ定数 $K_s$ のバネで結ばれた輪を考える。隣り合う質点間の平衡距離は $a$ である。$n$ 番目の組の $M_1,M_2$ の変位を $u_n,v_n$ とし、その右隣の組を $n+1$ とする。

3. $u_n,v_n$ の運動方程式を求めよ。
4. 波数 $k$、角振動数 $\omega$ の振動について $u_n,v_n$ の表式を示し、振幅が満たす方程式を求めよ。
5. $\omega$ を $k$ の関数で表せ。

![単原子格子と二原子格子](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/kyotsu_201608_phys_4_diagram_audited.svg)

### II

質量 $M_0$ の一次元調和振動子を考える。$h$ はプランク定数、$\hbar=h/(2\pi)$ とする。定常シュレーディンガー方程式は

$$
-\frac{\hbar^2}{2M_0}\frac{d^2\phi}{dx^2}
+\frac12M_0\omega^2x^2\phi=E\phi
$$

である。基底状態と第一励起状態の波動関数は、規格化定数 $C_0,C_1$ を用いて

$$
\phi_0(x)=C_0e^{-M_0\omega x^2/(2\hbar)},\qquad
\phi_1(x)=C_1\sqrt{\frac{M_0\omega}{\hbar}}x\,e^{-M_0\omega x^2/(2\hbar)}
$$

と表される。

1. それぞれのエネルギー固有値を求めよ。
2. 各状態の位置と運動量の期待値 $\langle x\rangle,\langle p\rangle$ を求めよ。

#### 题目描述

I. 将 $N$ 个质量为 $M_0$ 的质点以劲度系数 $K_s$ 的弹簧连成一维圆环，$N$ 足够大，平衡时相邻间距为 $a$。质点仅沿圆环方向小振动，取图中向右为力与位移的正方向，第 $n$ 个质点的位移为 $u_n$。

1. 写出 $u_n$ 的运动方程。
2. 代入 $u_n=u\exp[-i(\omega t-kna)]$，求色散关系 $\omega(k)$。

再考虑质量 $M_1,M_2$ 交替排列、相邻平衡间距仍为 $a$、弹簧劲度系数仍为 $K_s$ 的圆环。第 $n$ 组两质点的位移为 $u_n,v_n$，右侧一组为 $n+1$。

3. 写出两个位移的运动方程。
4. 写出波数为 $k$、角频率为 $\omega$ 的振动形式，求振幅满足的方程。
5. 求两支色散关系 $\omega(k)$。

II. 质量 $M_0$ 的一维量子谐振子满足定态薛定谔方程

$$
-\frac{\hbar^2}{2M_0}\frac{d^2\phi}{dx^2}+\frac12M_0\omega^2x^2\phi=E\phi.
$$

$h$ 为普朗克常数，$\hbar=h/(2\pi)$。基态、第一激发态分别为

$$
\phi_0=C_0e^{-M_0\omega x^2/(2\hbar)},\qquad
\phi_1=C_1\sqrt{\frac{M_0\omega}{\hbar}}x\,e^{-M_0\omega x^2/(2\hbar)},
$$

其中 $C_0,C_1$ 为归一化常数。

1. 求两个态的能量本征值。
2. 求各态的位置和动量期望值。

## **Kai**

### I

#### I.1–I.2

左右のバネの力を加えると

$$
\boxed{M_0\ddot u_n=K_s(u_{n+1}+u_{n-1}-2u_n)}.
$$

与えられた波を代入し、$e^{ika}+e^{-ika}-2=-4\sin^2(ka/2)$ を用いると

$$
\boxed{\omega(k)=2\sqrt{\frac{K_s}{M_0}}\left|\sin\frac{ka}{2}\right|}.
$$

#### I.3–I.4

隣接する質点との相対変位から

$$
\boxed{M_1\ddot u_n=K_s(v_{n-1}+v_n-2u_n)},\qquad
\boxed{M_2\ddot v_n=K_s(u_n+u_{n+1}-2v_n)}.
$$

平衡位置の位相差を含めて

$$
u_n=u\,e^{i(2nka-\omega t)},\qquad
v_n=v\,e^{i((2n+1)ka-\omega t)}
$$

とおけば、振幅は

$$
\boxed{\begin{pmatrix}
2K_s-M_1\omega^2&-2K_s\cos ka\\
-2K_s\cos ka&2K_s-M_2\omega^2
\end{pmatrix}\begin{pmatrix}u\\v\end{pmatrix}=0}
$$

を満たす。実際の変位は実部を取る。

#### I.5

非自明解の条件は行列式がゼロとなることであり、

$$
M_1M_2\omega^4-2K_s(M_1+M_2)\omega^2+4K_s^2\sin^2ka=0.
$$

したがって

$$
\boxed{\omega_\pm^2=K_s\left(\frac1{M_1}+\frac1{M_2}\right)
\pm K_s\sqrt{\left(\frac1{M_1}+\frac1{M_2}\right)^2
-\frac{4\sin^2ka}{M_1M_2}}}.
$$

$-$ は音響分枝、$+$ は光学分枝である。

### II

#### II.1

$b=M_0\omega/\hbar$ とおくと

$$
\phi_0''=(b^2x^2-b)\phi_0,\qquad
\phi_1''=(b^2x^2-3b)\phi_1.
$$

シュレーディンガー方程式に代入すると $x^2$ の項が相殺され、

$$
\boxed{E_0=\frac12\hbar\omega},\qquad
\boxed{E_1=\frac32\hbar\omega}.
$$

#### II.2

両状態とも確率密度は偶関数なので、$x|\phi_j|^2$ は奇関数である。また波動関数は実関数に取れて無限遠でゼロになる。よって $j=0,1$ に対して

$$
\boxed{\langle x\rangle_j=\int_{-\infty}^{\infty}x|\phi_j|^2dx=0},\qquad
\boxed{\langle p\rangle_j=-i\hbar\int_{-\infty}^{\infty}\phi_j\phi_j' dx
=-\frac{i\hbar}{2}[\phi_j^2]_{-\infty}^{\infty}=0}.
$$

