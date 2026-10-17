---
sidebar_label: "2019年8月実施 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2019年8月実施 材料力学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

図のように、構造 AOC-BOD が、点 B、点 C、点 D の各点で剛体壁に完全に固定されている。点 A に $z$ 方向荷重 $P$ を作用させるとき、点 A の $z$ 方向変位 $\delta_{AZ}$ を求めよ。ただし、構造 AOC-BOD は、直径 $d$ の丸棒からなり、$\ell\gg d$、ヤング率 $E$、横弾性係数 $G$ とし、$G=E/2$ とする。なお、丸棒の断面二次モーメント（$I$）と断面二次極モーメント（$I_p$）は、以下の式で与えられる。（50点）

$$
I=\frac{\pi d^4}{64},\qquad I_p=\frac{\pi d^4}{32}.
$$

図中、OA、OB、OC、OD の長さはすべて $\ell$ である。

![原題の三端固定された十字形丸棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_material_3_figure_1.png)

#### 题目描述

如图，结构 AOC-BOD 在 B、C、D 三点完全固定于刚性墙壁。当 A 点受到沿 $z$ 方向的载荷 $P$ 时，求 A 点沿 $z$ 方向的位移 $\delta_{AZ}$。结构 AOC-BOD 由直径为 $d$ 的圆杆构成，$\ell\gg d$，杨氏模量为 $E$，剪切模量为 $G$，且 $G=E/2$。圆杆的截面二次矩 $I$ 和截面极二次矩 $I_p$ 由上式给出。（50分）

图中 OA、OB、OC、OD 的长度均为 $\ell$，连接方式、坐标和荷载方向如图。

## **Kai**

O の荷重方向変位を $w$、BD 軸まわりの A 側が下がる回転角を $\varphi$ とする。対称性から AC 軸まわりの回転はゼロ。OA は O に力 $P$ とモーメント $P\ell$ を伝える。

OC の O 端におけるせん断力 $V_C$、曲げモーメント $M_C$ は片持ちばりの端部剛性から

$$
\binom{V_C}{M_C}
=EI\begin{pmatrix}12/\ell^3&-6/\ell^2\\-6/\ell^2&4/\ell\end{pmatrix}
\binom w\varphi.
$$

OB、OD は曲げによってそれぞれ $12EIw/\ell^3$ のせん断力を負担する。また $\varphi$ に対してはねじり抵抗 $GI_p\varphi/\ell$ を生じる。$GI_p=EI$ より、O のつり合いは

$$
\begin{gathered}
\frac{36EI}{\ell^3}w-\frac{6EI}{\ell^2}\varphi=P,\\
-\frac{6EI}{\ell^2}w+\frac{6EI}{\ell}\varphi=P\ell.
\end{gathered}
$$

これを解いて

$$
w=\frac{P\ell^3}{15EI},\qquad
\varphi=\frac{7P\ell^2}{30EI}.
$$

A の変位は、O の並進、O の回転による変位、OA 自身の曲げたわみの和である。

$$
\begin{gathered}
\delta_{AZ}=w+\ell\varphi+\frac{P\ell^3}{3EI}\\
=\boxed{\frac{19P\ell^3}{30EI}
=\frac{608P\ell^3}{15\pi Ed^4}}.
\end{gathered}
$$

## **Reference**

- [九州大学 2020年度 材料力学 公式問題（PDF 3ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-material.pdf)
