---
sidebar_label: "2017年8月実施 量子力学 第1問"
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Particle-on-a-Ring
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 量子力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. ある平面内において，座標原点から一定距離 $r$ 離れている円周上を自由に運動する質量 $m$，エネルギー $E$ の粒子の波動関数 $\varphi(r,\theta)$ を考える。二次元極座標のラプラシアンは

$$
\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2}{\partial\theta^2}
$$

で与えられる。以下の問いに答えよ。

**(1)** この粒子に対する時間に依存しない二次元シュレーディンガー方程式を極座標 $(r,\theta)$ を用いて示せ。

**(2)** $\varphi(r,\theta)$ が満たすべき周期的境界条件を示せ。

**(3)** 規格化された波動関数 $\varphi(r,\theta)$ を求めよ。

**(4)** この粒子のエネルギー $E$ を求めよ。

**(5)** ある与えられた角運動量に対して，この粒子の位置は正確に特定することができないことを示せ。

#### 题目描述

1. 考虑质量为 $m$、能量为 $E$ 的粒子的波函数 $\varphi(r,\theta)$。该粒子在某平面内，沿距坐标原点恒定距离 $r$ 的圆周自由运动。二维极坐标中的拉普拉斯算符为

$$
\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2}{\partial\theta^2}.
$$

回答下列问题。

**(1)** 用极坐标 $(r,\theta)$ 写出该粒子的二维定态薛定谔方程。

**(2)** 写出 $\varphi(r,\theta)$ 必须满足的周期性边界条件。

**(3)** 求归一化波函数 $\varphi(r,\theta)$。

**(4)** 求粒子的能量 $E$。

**(5)** 证明当角动量取某个给定值时，不能精确确定该粒子的位置。

## **Kai**

### (1)

自由粒子の平面内の方程式は

$$
-\frac{\hbar^2}{2m}\left[\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial\varphi}{\partial r}\right)+\frac1{r^2}\frac{\partial^2\varphi}{\partial\theta^2}\right]=E\varphi.
$$

半径が固定された円周上の運動では座標は $\theta$ のみとなり、運動エネルギー演算子は角方向の項だから

$$
\boxed{-\frac{\hbar^2}{2mr^2}\frac{d^2\varphi}{d\theta^2}=E\varphi}.
$$

### (2)

同一点で波動関数とその導関数が一価となる周期境界条件

$$
\boxed{\varphi(\theta+2\pi)=\varphi(\theta),\qquad\varphi'(\theta+2\pi)=\varphi'(\theta)}
$$

を満たす。

### (3)

$e^{i\nu\theta}$ を代入し、周期条件を課すと $e^{2\pi i\nu}=1$、すなわち $\nu=n\in\mathbb Z$。弧長測度 $r\,d\theta$ で規格化すれば

$$
\int_0^{2\pi}|\varphi_n|^2r\,d\theta=1,\qquad
\boxed{\varphi_n(\theta)=\frac{e^{in\theta}}{\sqrt{2\pi r}},\quad n\in\mathbb Z}.
$$

角度測度 $d\theta$ を用いる表示では $\psi_n=\sqrt r\,\varphi_n=e^{in\theta}/\sqrt{2\pi}$。$n=0$ の定数解も含む。非零のエネルギー準位では $\varphi_n$ と $\varphi_{-n}$ の規格化した線形結合も固有関数になる。

### (4)

$$
\boxed{E_n=\frac{\hbar^2n^2}{2mr^2},\quad n\in\mathbb Z}.
$$

基底状態 $n=0$ は非縮退、$|n|\ge1$ は $\pm n$ による2重縮退である。

### (5)

$$
\widehat L_z=-i\hbar\frac{d}{d\theta},\qquad \widehat L_z\varphi_n=n\hbar\varphi_n.
$$

従って $\varphi_n$ では角運動量が $n\hbar$ に確定する。一方で

$$
|\varphi_n(\theta)|^2r\,d\theta=\frac{d\theta}{2\pi}
$$

となり、粒子を見いだす確率は円周上で一様である。位置を角度方向に局在させるには、異なる角運動量固有状態の重ね合わせが必要になる。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 25ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
