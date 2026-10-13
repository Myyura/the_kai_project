---
sidebar_label: "2020年度 問3（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Torsion
---

# 九州大学 工学府 機械系専攻 2020年度 材料力学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

同一平面内で二本の直線状の丸棒 AOC、BOD が中点 O で直交して剛結された十字構造を考える。OA、OB、OC、OD の長さはすべて $\ell$。点 B、C、D は剛体壁に完全固定され、点 A は自由である。A に面外の $z$ 方向荷重 $P$ を作用させたとき、A の $z$ 方向変位 $\delta_{AZ}$ を求めよ。

各丸棒の直径を $d$ とし、$\ell\gg d$、縦弾性係数 $E$、横弾性係数 $G=E/2$ とする。断面二次モーメントと断面二次極モーメントは

$$
I=\frac{\pi d^4}{64},\qquad I_p=\frac{\pi d^4}{32}
$$

である。

#### 题目描述

两根直圆杆 AOC、BOD 在中点 O 正交刚接，四臂长均为 $\ell$。B、C、D 完全固定，A 自由。在 A 施加垂直于两杆平面的力 $P$，求 A 沿力方向的位移。各杆直径 $d$、$\ell\gg d$，材料参数为 $E,G=E/2$，且 $I=\pi d^4/64,I_p=\pi d^4/32$。

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
\frac{36EI}{\ell^3}w-\frac{6EI}{\ell^2}\varphi=P,
\qquad
-\frac{6EI}{\ell^2}w+\frac{6EI}{\ell}\varphi=P\ell.
$$

これを解いて

$$
w=\frac{P\ell^3}{15EI},\qquad
\varphi=\frac{7P\ell^2}{30EI}.
$$

A の変位は、O の並進、O の回転による変位、OA 自身の曲げたわみの和である。

$$
\delta_{AZ}=w+\ell\varphi+\frac{P\ell^3}{3EI}
=\boxed{\frac{19P\ell^3}{30EI}
=\frac{608P\ell^3}{15\pi Ed^4}}.
$$

## **Reference**

- [九州大学 2020年度 材料力学 公式問題（PDF 3ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-material.pdf)
