---
sidebar_label: "2023年8月実施 専門科目 3-3"
tags:
  - Kyoto-University
  - Engineering.Mechanics-of-Materials.Castiglianos-Theorem
  - Engineering.Mechanics-of-Materials.Torsion
---

# 京都大学 工学研究科 機械工学群 2023年8月実施 専門科目 3-3

## **Author**
祭音Myyura (Based on [SN's answer](https://bloodystream.hatenadiary.jp/entry/2021/05/01/080000) refined with GPT 6 Astra)

## **Description**

[原問題（2024年度、PDF 12・15ページ）](https://www.me.t.kyoto-u.ac.jp/ja/admission/exam/body/past_problems/files/2024_specializedsubjects.pdf)

半径 $R$ の水平な半円形リング AB の B 端を固定する。断面は直径 $d\ll R$ の一様な中実円で、縦弾性係数 $E$、横弾性係数 $G$ とする。変形は微小で自重を無視する。中心角 $\theta$ は A で $0$、B で $\pi$ とする。

1. A に図の向きのねじりモーメント $T_A$ のみを加えたとき、各断面の曲げモーメント $M_1(\theta)$ とねじりモーメント $T_1(\theta)$ を求める。正方向は明示すること。
2. A に鉛直下向きの集中荷重 $P_A$ のみを加えたとき、同じ符号規約で $M_2(\theta),T_2(\theta)$ を求める。
3. 1 の荷重条件で、A の鉛直下向き変位 $\delta_A$ を求める。

![半円形リングと荷重の方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/sn-mechanics/other/kyoto-2024-ring.svg)

#### 题目描述

水平半圆杆半径为 $R$，B 端固定，A 端自由；圆截面直径为 $d\ll R$，材料参数为 $E,G$。忽略自重，采用小变形。沿杆由 A 到 B 的中心角为 $0\le\theta\le\pi$。分别求 A 端单独承受图示扭矩 $T_A$、竖直向下集中力 $P_A$ 时的弯矩和扭矩，再求仅作用 $T_A$ 时 A 端向下的位移。

## **Kai**

### (1), (2)

切断面より A 側の部分に働く内力モーメントについて、曲げは円の中心向き、ねじりは A から B に向かう接線方向を正とする。両荷重を同時に作用させ、各方向のモーメントのつり合いをとると

$$
M+T_A\sin\theta+P_AR\sin\theta=0,\qquad
T-T_A\cos\theta+P_AR(1-\cos\theta)=0.
$$

したがって

$$
\boxed{M_1=-T_A\sin\theta,\quad T_1=T_A\cos\theta},
\qquad
\boxed{M_2=-P_AR\sin\theta,\quad T_2=-P_AR(1-\cos\theta)}.
$$

### (3)

$P_A$ を鉛直下向きの仮想荷重として用いる。断面二次モーメントと極断面二次モーメントは

$$
I=\frac{\pi d^4}{64},\qquad J=\frac{\pi d^4}{32}.
$$

ひずみエネルギーに Castigliano の定理を適用する。

$$
U=\int_0^\pi\left(\frac{M^2}{2EI}+\frac{T^2}{2GJ}\right)R\,d\theta,
$$

$$
\begin{aligned}
\delta_A
&=\left.\frac{\partial U}{\partial P_A}\right|_{P_A=0}\\
&=\frac{T_AR^2}{EI}\int_0^\pi\sin^2\theta\,d\theta
-\frac{T_AR^2}{GJ}\int_0^\pi\cos\theta(1-\cos\theta)\,d\theta\\
&=\frac{\pi T_AR^2}{2}\left(\frac1{EI}+\frac1{GJ}\right)
=\boxed{\frac{16T_AR^2}{d^4}\left(\frac2E+\frac1G\right)}.
\end{aligned}
$$

