---
sidebar_label: "2020年8月実施 必須問題（物理学基礎）問2"
tags:
  - University-of-Electro-Communications
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Electrostatic-Shielding
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 必須問題（物理学基礎）問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空の誘電率を $\varepsilon_0$ とする。

1. 点電荷 $q$ を囲む任意の閉曲面 $S$ 上で、電場 $\mathbf E$、外向き法線単位ベクトル $\mathbf n$、微小面積 $dS$ を考える。$q$ からの位置を $\mathbf r$ とすると、立体角は $d\Omega=(\mathbf r\cdot\mathbf n)dS/r^3$ である。$\mathbf E\cdot\mathbf n\,dS$ を $d\Omega$ で表し、ガウスの法則 $\oint_S\mathbf E\cdot\mathbf n\,dS=q/\varepsilon_0$ を示せ。
2. 半径 $a$ の導体球を、内半径 $b$、外半径 $c$ の中性の同心導体球殻で囲み、内球だけに電荷 $Q$ を与える（$a<b<c$）。球面上の点 $A$ と球殻内面上の点 $B$ を結ぶ空洞内の任意の経路を $C$ とする。微小変位 $d\mathbf s$ を球座標の単位ベクトルで表し、$\mathbf E\cdot d\mathbf s$ を動径方向の $dr$ で表せ。さらに $B$ を基準とする $A$ の電位を求めよ。
3. 球殻の導体内部 $b<r<c$ にある同心球面 $S_1$ にガウスの法則を適用し、内面の誘導電荷 $Q_1$ を求めよ。
4. 球殻内面をまたぐ、高さが十分小さく底面積が $dS$ の円柱 $S_2$ にガウスの法則を適用し、内面の電荷面密度 $\omega$ と $Q_1$ を求めよ。
5. 球殻外部 $r>c$ の電場ベクトルと、無限遠を基準とした $A$ の電位を求めよ。
6. 内球は中性のまま、球殻だけに電荷 $Q$ を与えた場合の、無限遠を基準とする $A$ の電位を求めよ。

#### 题目描述

先用点电荷的库仑场和有向立体角证明高斯定律。再研究真空中半径为 $a$ 的导体球及内、外半径为 $b,c$ 的同心导体壳，$a<b<c$。内球带电 $Q$、壳中性时，求球坐标微小位移、电场线积分、球相对壳内表面的电位差、壳内面的感应电荷与面密度、壳外电场及球相对无穷远的电位；最后改为内球中性而仅壳带电 $Q$，求球的电位。感应电荷分别用导体内高斯球面与跨越内表面的微小柱面推导。

## **Kai**

### (1)

クーロンの法則 $\mathbf E=q\mathbf r/(4\pi\varepsilon_0r^3)$ より

$$
\mathbf E\cdot\mathbf n\,dS=\frac{q}{4\pi\varepsilon_0}d\Omega.
$$

閉曲面が電荷を囲むとき、有向立体角の積分は $4\pi$。したがって $\boxed{\oint_S\mathbf E\cdot\mathbf n\,dS=q/\varepsilon_0}$。

### (2)

$$
d\mathbf s=dr\,\mathbf e_r+r\,d\theta\,\mathbf e_\theta+r\sin\theta\,d\varphi\,\mathbf e_\varphi.
$$

球対称性とガウスの法則から、$a<r<b$ では $\mathbf E=Q\mathbf e_r/(4\pi\varepsilon_0r^2)$。したがって $\mathbf E\cdot d\mathbf s=Q\,dr/(4\pi\varepsilon_0r^2)$、

$$
\boxed{V_A-V_B=-\int_b^a\frac{Q}{4\pi\varepsilon_0r^2}dr
=\frac{Q}{4\pi\varepsilon_0}\left(\frac1a-\frac1b\right)}.
$$

### (3), (4)

導体内部の電場は0なので、$S_1$ の内部電荷も0。よって $\boxed{Q_1=-Q}$。

微小円柱の空洞側の底面法線は $-\mathbf e_r$、導体側の電場は0である。側面の寄与を高さとともに0にすると

$$
-E(b)dS=\frac{\omega dS}{\varepsilon_0},\qquad
\boxed{\omega=-\frac{Q}{4\pi b^2}},\quad
\boxed{Q_1=4\pi b^2\omega=-Q}.
$$

### (5)

中性の球殻の外面には $+Q$ が誘導される。全電荷は $Q$ であるから

$$
\boxed{\mathbf E(r)=\frac{Q}{4\pi\varepsilon_0r^2}\mathbf e_r\quad(r>c)}.
$$

球殻は等電位で $V_B=V(c)=Q/(4\pi\varepsilon_0c)$。したがって

$$
\boxed{V_A=\frac{Q}{4\pi\varepsilon_0}\left(\frac1a-\frac1b+\frac1c\right)}.
$$

### (6)

内球の電荷が0なので球殻内面の電荷も0であり、$Q$ はすべて外面に分布する。空洞内の電場は0、内球と球殻は等電位となるため

$$
\boxed{V_A=\frac{Q}{4\pi\varepsilon_0c}}.
$$

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 7–8ページ](https://web.archive.org/web/20241224120234id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_mandatory202008.pdf)
