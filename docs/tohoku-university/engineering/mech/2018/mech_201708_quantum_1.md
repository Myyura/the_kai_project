---
sidebar_label: "2017年秋季 量子力学 第1問"
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Particle-on-a-Ring
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 量子力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

質量 $m$ の自由粒子が、平面内の原点を中心とする半径 $r$ の円周上を運動する。波動関数を $\varphi$、エネルギーを $E$ とする。極座標におけるラプラシアンは

$$
\nabla^2=\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial}{\partial r}\right)+\frac1{r^2}\frac{\partial^2}{\partial\theta^2}
$$

である。

1. 時間に依存しないシュレーディンガー方程式を極座標で書き、円周上の運動について簡単化せよ。
2. 波動関数が満たす境界条件を述べよ。
3. 規格化した波動関数を求めよ。
4. エネルギー固有値を求めよ。
5. 角運動量と粒子の位置の関係について説明せよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

质量 $m$ 的自由粒子被限制在半径 $r$ 的圆周上。（1）用极坐标写定态薛定谔方程并化简；（2）给出边界条件；（3）求归一化波函数；（4）求能量本征值；（5）说明角动量与粒子位置的关系。题面给出二维极坐标拉普拉斯算子。

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
