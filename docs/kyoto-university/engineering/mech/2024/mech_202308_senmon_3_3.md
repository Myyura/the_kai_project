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

3. 縦弾性係数 $E$、横弾性係数 $G$ の均質な線形・等方弾性体からなる部材に関して以下の問いに答えよ。ただし、部材の変形は微小とし、自重の影響は無視せよ。

### 3-3

図3-3に示すように、半径 $R$ の半円形リング AB が一端 B で水平に固定されている。リングの横断面（リングの軸線に垂直な断面）は直径 $d$ の中実円形断面であり、直径 $d$ はリングの半径 $R$ に比べて十分に小さく、リングに沿って一定とする。また、図3-3に示すようにリングの横断面の位置を表す角度を $\theta$ とし、先端 A で $\theta=0$、固定端 B で $\theta=\pi$ とする。

(1) 図3-3(a)に示すように、このリングが先端 A において大きさ $T_A$ のねじりモーメントを受けてつり合い状態にあるとする。ただし、このねじりモーメントの向きは図3-3(a)に示す矢印の向きのとおりである。このときリングの横断面で生じる曲げモーメント $M_1$ およびねじりモーメント $T_1$ を、横断面の位置を表す角度 $\theta$ の関数として求めよ。ただしこれらのモーメントが正となる向きは任意に定めてよい。

(2) 図3-3(b)に示すように、このリングが先端 A において鉛直下向きに大きさ $P_A$ の集中荷重を受けてつり合い状態にあるとする。このときリングの横断面で生じる曲げモーメント $M_2$ およびねじりモーメント $T_2$ を、横断面の位置を表す角度 $\theta$ の関数として求めよ。ただしこれらのモーメントが正となる向きは問い3-3 (1) の解答で定めた正の向きに合わせよ。

(3) このリングが問い3-3 (1) のねじりモーメント $T_A$ を受けてつり合い状態にあるとき、リングの先端 A の鉛直下向きの変位 $\delta_A$ を求めよ。

![原題の図3-3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyoto-university/engineering/mech/2024/mech_202308_senmon_3_3_original_figure_1.png)

#### 题目描述

3. 对由均质、线性、各向同性弹性体构成的构件回答以下问题。其杨氏模量为 $E$，剪切模量为 $G$。假设变形微小，忽略自重影响。

**3-3**

如图3-3，半径为 $R$ 的半圆形环 AB 在 B 端水平固定。环的横截面（垂直于环轴线的截面）为直径 $d$ 的实心圆，$d$ 远小于环半径 $R$，并沿环保持不变。用图3-3所示角度 $\theta$ 表示截面位置，A 端为 $\theta=0$，固定端 B 为 $\theta=\pi$。

(1) 如图3-3(a)，环在 A 端承受大小为 $T_A$ 的扭矩并处于平衡，扭矩方向与图中箭头一致。求各横截面弯矩 $M_1$ 和扭矩 $T_1$ 关于截面位置角度 $\theta$ 的函数。各力矩的正方向可自行规定。

(2) 如图3-3(b)，环在 A 端承受大小为 $P_A$ 的竖直向下集中力并处于平衡。求各横截面弯矩 $M_2$ 和扭矩 $T_2$ 关于截面位置角度 $\theta$ 的函数。力矩正方向须与3-3 (1) 中规定的正方向一致。

(3) 环在3-3 (1) 的扭矩 $T_A$ 作用下处于平衡时，求 A 端竖直向下的位移 $\delta_A$。

## **Kai**

### (1), (2)

切断面より A 側の部分に働く内力モーメントについて、曲げは円の中心向き、ねじりは A から B に向かう接線方向を正とする。両荷重を同時に作用させ、各方向のモーメントのつり合いをとると

$$
\begin{gathered}
M+T_A\sin\theta+P_AR\sin\theta=0,\\
T-T_A\cos\theta+P_AR(1-\cos\theta)=0.
\end{gathered}
$$

したがって

$$
\begin{gathered}
\boxed{M_1=-T_A\sin\theta,\quad T_1=T_A\cos\theta},\\
\boxed{M_2=-P_AR\sin\theta,\quad T_2=-P_AR(1-\cos\theta)}.
\end{gathered}
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

