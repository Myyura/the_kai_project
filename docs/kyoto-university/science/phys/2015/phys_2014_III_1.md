---
sidebar_label: "2015年度 III-1（電磁気学）"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2015年度 III-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

マクスウェル方程式

$$
\nabla\cdot\boldsymbol D=\rho,\quad\nabla\cdot\boldsymbol B=0,\quad
\nabla\times\boldsymbol H-\partial_t\boldsymbol D=\boldsymbol j,\quad
\nabla\times\boldsymbol E+\partial_t\boldsymbol B=0
$$

と $\boldsymbol D=\epsilon\boldsymbol E$、$\boldsymbol B=\mu\boldsymbol H$ を用いる。図1のように、平面 $z=0$ で誘電体 1（$z<0$、$\epsilon_1,\mu_1$）と誘電体 2（$z>0$、$\epsilon_2,\mu_2$）が接触する。$\epsilon_1<\epsilon_2$、両者は帯電しておらず、自由電流もないとする。

![図1：2つの誘電体の境界面と座標（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2015-III-1-fig1.png)

1. 両側の $\boldsymbol E_1,\boldsymbol B_1$ と $\boldsymbol E_2,\boldsymbol B_2$ の境界条件を導け。
2. $\rho=0,\boldsymbol j=0$ の一様な領域で $\boldsymbol E$ の波動方程式を導け。

図2のように、誘電体 1 から $xz$ 面内を進む入射波 $A$ の電場を $\boldsymbol E=\boldsymbol I e^{i(\boldsymbol k\cdot\boldsymbol r-\omega t)}$ とする。入射角 $\phi\in(0,\pi/2)$ は境界法線から測る。反射波 $A'$ と屈折波 $A''$ をそれぞれ $\boldsymbol E'=\boldsymbol R e^{i(\boldsymbol k'\cdot\boldsymbol r-\omega't)}$、$\boldsymbol E''=\boldsymbol F e^{i(\boldsymbol k''\cdot\boldsymbol r-\omega''t)}$ とし、反射角を $\phi'$、屈折角を $\chi$ とする。

![図2：入射波・反射波・屈折波（原題）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/question-figures/2015-III-1-fig2.png)

3. 入射波の位相速度の大きさと、その方向が $\boldsymbol I$ となす角を求めよ。
4. 入射波の $\boldsymbol B(\boldsymbol r,t)$ を求めよ。
5. 境界条件が境界上の任意の点・時刻で成立することから、$\phi',\chi$ を求めよ。

#### 题目描述

使用麦克斯韦方程及 $\boldsymbol D=\epsilon\boldsymbol E$、$\boldsymbol B=\mu\boldsymbol H$。如上图1，两均匀介质在 $z=0$ 接触：介质 1 位于 $z<0$，参数 $(\epsilon_1,\mu_1)$；介质 2 位于 $z>0$，参数 $(\epsilon_2,\mu_2)$。$\epsilon_1<\epsilon_2$，无自由电荷和电流。

1. 推导两侧电场、磁感应强度的边界条件。
2. 在无电荷和电流的均匀区域推导电场波动方程。

如上图2，平面波从介质 1 在 $xz$ 平面内入射，电场为 $\boldsymbol I e^{i(\boldsymbol k\cdot\boldsymbol r-\omega t)}$。入射角 $\phi\in(0,\pi/2)$ 从法线量起，反射与折射场分别为 $\boldsymbol R e^{i(\boldsymbol k'\cdot\boldsymbol r-\omega't)}$、$\boldsymbol F e^{i(\boldsymbol k''\cdot\boldsymbol r-\omega''t)}$，相应角为 $\phi',\chi$。

3. 求入射波相速度大小及其方向与电场振幅的夹角。
4. 求入射波磁场。
5. 用任意时空点均满足边界条件推导反射角和折射角。

## **Kai**

### (1)
境界をまたぐ高さが微小な長方形に回転の方程式を積分すると、接線成分について

$$
\boxed{E_{1x}=E_{2x},\quad E_{1y}=E_{2y},\quad
\frac{B_{1x}}{\mu_1}=\frac{B_{2x}}{\mu_2},\quad
\frac{B_{1y}}{\mu_1}=\frac{B_{2y}}{\mu_2}}.
$$

また薄い円柱に発散の方程式を積分すると

$$
\boxed{\epsilon_1E_{1z}=\epsilon_2E_{2z},\qquad B_{1z}=B_{2z}}.
$$

自由表面電荷・表面電流がないことを使った。
### (2)
$\nabla\cdot\boldsymbol E=0$ と $\nabla\times\boldsymbol B=\mu\epsilon\partial_t\boldsymbol E$ より

$$
-\nabla^2\boldsymbol E=\nabla\times(\nabla\times\boldsymbol E)
=-\mu\epsilon\partial_t^2\boldsymbol E.
$$

したがって

$$
\boxed{\nabla^2\boldsymbol E-\mu\epsilon\partial_t^2\boldsymbol E=0}.
$$

### (3)
平面波を代入すると $k^2=\epsilon_1\mu_1\omega^2$。また $\nabla\cdot\boldsymbol E=0$ より $\boldsymbol k\cdot\boldsymbol I=0$。

$$
\boxed{|\boldsymbol v|=\frac1{\sqrt{\epsilon_1\mu_1}},\qquad
\angle(\boldsymbol v,\boldsymbol I)=\frac\pi2}.
$$

### (4)
ファラデーの法則から $i\boldsymbol k\times\boldsymbol E=i\omega\boldsymbol B$ なので

$$
\boxed{\boldsymbol B(\boldsymbol r,t)=\frac{\boldsymbol k\times\boldsymbol I}{\omega}
e^{i(\boldsymbol k\cdot\boldsymbol r-\omega t)}}.
$$

### (5)
境界上で位相が一致するには

$$
\omega=\omega'=\omega'',\qquad
\boldsymbol k_\parallel=\boldsymbol k'_\parallel=\boldsymbol k''_\parallel.
$$

同一媒質内では $|\boldsymbol k|=|\boldsymbol k'|$ なので

$$
\boxed{\phi'=\phi,\qquad
\sin\chi=\sqrt{\frac{\epsilon_1\mu_1}{\epsilon_2\mu_2}}\sin\phi}.
$$

伝播する屈折波がある場合、$\chi$ は右辺の逆正弦である。右辺が 1 を超えると実数の屈折角はなく、全反射となって媒質 2 側には減衰波が生じる。$\epsilon_1<\epsilon_2$ だけでは、透磁率が異なる場合まで全反射を排除できない。

## **Reference**

- [京都大学公式問題（2015年度、PDF 16–17ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H27.pdf)
