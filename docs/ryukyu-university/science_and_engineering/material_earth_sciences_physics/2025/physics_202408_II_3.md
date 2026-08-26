---
sidebar_label: "2024年8月実施 [II] 問3"
tags:
  - Ryukyu-University
  - Physics.Electromagnetism.Electromagnetic-Wave
---
# 琉球大学 理工学研究科 物質地球科学専攻 物理系 2024年8月実施 [II] 問3

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
真空中に電荷も電流もない場合について、次の問に答えよ。

1. 電場 $\boldsymbol E$ と磁束密度 $\boldsymbol B$ に対する Maxwell 方程式を示せ。
2. $\boldsymbol E,\boldsymbol B$ がそれぞれ

   $$
   \left(\frac{1}{v^2}\frac{\partial^2}{\partial t^2}-\nabla^2\right)\boldsymbol u=\boldsymbol0
   $$

   と同形の波動方程式に従うことを示せ。
3. 電磁波の速さを求め、光速と一致することを示せ。

## **Kai**

### (1)

$$
\nabla\cdot\boldsymbol E=0,\qquad
\nabla\cdot\boldsymbol B=0,
$$

$$
\nabla\times\boldsymbol E=-\frac{\partial\boldsymbol B}{\partial t},\qquad
\nabla\times\boldsymbol B=\mu_0\varepsilon_0
\frac{\partial\boldsymbol E}{\partial t}.
$$

### (2)

恒等式

$$
\nabla\times(\nabla\times\boldsymbol u)
=\nabla(\nabla\cdot\boldsymbol u)-\nabla^2\boldsymbol u
$$

を用いる。Faraday の法則の両辺に $\nabla\times$ を作用させると

$$
-\nabla^2\boldsymbol E
=-\mu_0\varepsilon_0\frac{\partial^2\boldsymbol E}{\partial t^2},
$$

したがって

$$
\left(\mu_0\varepsilon_0\frac{\partial^2}{\partial t^2}
-\nabla^2\right)\boldsymbol E=\boldsymbol0.
$$

同様に Ampère--Maxwell の法則の両辺に $\nabla\times$ を作用させると

$$
\left(\mu_0\varepsilon_0\frac{\partial^2}{\partial t^2}
-\nabla^2\right)\boldsymbol B=\boldsymbol0.
$$

よって

$$
v=\frac{1}{\sqrt{\mu_0\varepsilon_0}}.
$$

### (3)

真空中では

$$
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$

であるから、$\boxed{v=c}$ である。

## **Reference**
- [琉球大学 物理系 大学院入試問題](http://www.phys.u-ryukyu.ac.jp/gakunai/inshi.html)
- [2024年8月実施 公式問題 PDF](http://www.phys.u-ryukyu.ac.jp/gakunai/2024-8.pdf)
