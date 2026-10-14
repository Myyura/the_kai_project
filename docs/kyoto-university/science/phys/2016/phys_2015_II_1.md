---
sidebar_label: "2016年度 II-1（力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Two-Body-Central-Force-and-Effective-Potential
  - Physics.Mechanics.Radial-Small-Oscillation-Frequency
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2016年度 II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

質量 1 の質点が二次元平面内の中心力ポテンシャル $\Phi(r)=-C/r^\alpha$（$C>0$）で運動する。

1. 極座標 $(r,\phi)$ でラグランジアンと運動方程式を求めよ。
2. 保存量を用いて径方向の式を $\ddot r+dV_{\rm eff}/dr=0$ とし、$\lim_{r\to\infty}V_{\rm eff}=0$ を満たす有効ポテンシャルを求めよ。
3. 半径 $r_0$、角速度 $\Omega_0$ の円運動について $\Omega_0$ を求め、径方向の微小摂動が微小に留まるための $\alpha$ の条件を求めよ。

以下、安定な円運動のまわりを考える。

4. $r=r_0(1+\epsilon x)$、$\phi=\Omega_0t+\epsilon y$、$\epsilon\ll1$ とおく。一次の摂動方程式を

$$
\begin{pmatrix}\ddot x\\\ddot y\end{pmatrix}
+\mathsf M\begin{pmatrix}\dot x\\\dot y\end{pmatrix}
+\mathsf N\begin{pmatrix}x\\y\end{pmatrix}=0
$$

と書き、$\mathsf M,\mathsf N$ を $\Omega_0,\alpha$ で表せ。
5. $(x,y)=(A,B)e^{i\omega t}$、$\omega\ne0$ として $\omega$ と $\Omega_0$ の関係を導け。
6. 摂動方程式の右辺に $(f_x,f_y)=-k(x,y)$ を加える。これは半径 $r_0$ で等速回転するバネに質点をつけた場合に対応する。$k>0$ でも $\omega$ が純虚数となり指数増大する条件を、$k$ について表せ。

#### 题目描述

质量为 1 的质点在平面中心势 $\Phi(r)=-C/r^\alpha$、$C>0$ 中运动。

1. 用极坐标写出拉格朗日量及运动方程。
2. 利用守恒量求径向有效势，要求无穷远趋零。
3. 求半径 $r_0$ 的圆运动角频率及径向稳定所需的 $\alpha$ 范围。
4. 在稳定圆运动附近令 $r=r_0(1+\epsilon x)$、$\phi=\Omega_0t+\epsilon y$，求线性方程 $\ddot{\boldsymbol q}+\mathsf M\dot{\boldsymbol q}+\mathsf N\boldsymbol q=0$ 的两个矩阵，$\boldsymbol q=(x,y)^T$。
5. 取非零频率模态 $(x,y)=(A,B)e^{i\omega t}$，求 $\omega$。
6. 加弹簧恢复力 $-k(x,y)$，求即使 $k>0$ 也产生纯虚频率、指数不稳定的 $k$ 范围。

## **Kai**

### (1)

$$
\boxed{L=\frac12(\dot r^2+r^2\dot\phi^2)+\frac C{r^\alpha}},
$$

$$
\boxed{\ddot r-r\dot\phi^2+\frac{\alpha C}{r^{\alpha+1}}=0,
\qquad\frac d{dt}(r^2\dot\phi)=0}.
$$

### (2)
角運動量 $\ell=r^2\dot\phi$ は保存されるから

$$
\boxed{V_{\rm eff}(r)=\frac{\ell^2}{2r^2}-\frac C{r^\alpha}}.
$$

無限遠でゼロにできる範囲は $\alpha>0$（円運動の存在条件とも一致）である。
### (3)
円運動には $r_0\Omega_0^2=\alpha C/r_0^{\alpha+1}$ が必要なので

$$
\boxed{\Omega_0^2=\frac{\alpha C}{r_0^{\alpha+2}}}.
$$

円軌道上で $V_{\rm eff}''(r_0)=(2-\alpha)\Omega_0^2$。径方向の摂動 $\delta r$ は

$$
\delta\ddot r+(2-\alpha)\Omega_0^2\delta r=0
$$

に従うから、存在条件と合わせて $\boxed{0<\alpha<2}$。$\alpha=2$ では $\delta r=A+Bt$ に永年増大があり、安定とはいえない。
### (4)
一次まで展開すると

$$
\ddot x-2\Omega_0\dot y-(\alpha+2)\Omega_0^2x=0,
\qquad\ddot y+2\Omega_0\dot x=0.
$$

したがって

$$
\boxed{\mathsf M=\begin{pmatrix}0&-2\Omega_0\\2\Omega_0&0\end{pmatrix},\qquad
\mathsf N=\begin{pmatrix}-(\alpha+2)\Omega_0^2&0\\0&0\end{pmatrix}}.
$$

### (5)
振幅の非自明解の条件は

$$
\det\begin{pmatrix}-\omega^2-(\alpha+2)\Omega_0^2&-2i\omega\Omega_0\\2i\omega\Omega_0&-\omega^2\end{pmatrix}
=\omega^2[\omega^2-(2-\alpha)\Omega_0^2]=0.
$$

ゆえに非零の振動数は $\boxed{\omega^2=(2-\alpha)\Omega_0^2}$。
### (6)
$X=\omega^2$ とおくと

$$
X^2-[2k+(2-\alpha)\Omega_0^2]X+k[k-(\alpha+2)\Omega_0^2]=0.
$$

従って

$$
X_\pm=k+\frac{2-\alpha}{2}\Omega_0^2
\pm\frac12\sqrt{16k\Omega_0^2+(2-\alpha)^2\Omega_0^4}.
$$

$k>0$ では根は実数、和は正なので、負の根が生じるのは積が負のときに限る。

$$
\boxed{0<k<(\alpha+2)\Omega_0^2}.
$$

この範囲で $X_-<0$、$e^{\sqrt{-X_-}t}$ の増大解がある。境界ではゼロ振動数が現れるが指数増大はない。

## **Reference**

- [京都大学公式問題（2016年度、PDF 9ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H28.pdf)
