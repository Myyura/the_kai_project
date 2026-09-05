---
sidebar_label: "2022年度 数学 問題5"
tags:
  - Niigata-University
  - Mathematics.Geometry.Arc-Length-Parameter-and-Curvature
---
# 新潟大学 自然科学研究科 数理物質科学専攻 数理科学コース 2022年度 数学 問題5

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

題意の要約。
曲線 $C\subset\mathbb R^3$ を

$$
\boldsymbol p(t)=\left(t^2,\ t+\frac{t^3}{3},\ t-\frac{t^3}{3}\right)
\qquad(-\infty<t<\infty)
$$

で表す。

1. $C$ の単位接ベクトルを求めよ。
2. $0\le t\le1$ に対応する部分の長さを求めよ。
3. $C$ の曲率を求めよ。

## **Kai**

### (1)

$$
\boldsymbol p'(t)=(2t,1+t^2,1-t^2),\qquad
|\boldsymbol p'(t)|=\sqrt2(1+t^2).
$$

したがって

$$
\boldsymbol T(t)=\frac{(2t,1+t^2,1-t^2)}{\sqrt2(1+t^2)}.
$$

### (2)

$$
L=\int_0^1|\boldsymbol p'(t)|\,dt
=\sqrt2\left[t+\frac{t^3}{3}\right]_0^1
=\frac{4\sqrt2}{3}.
$$

### (3)

$$
\frac{d\boldsymbol T}{ds}
=\frac{(1-t^2,0,-2t)}{(1+t^2)^3},
$$

ゆえに

$$
\kappa(t)=\left|\frac{d\boldsymbol T}{ds}\right|
=\frac1{(1+t^2)^2}.
$$

## **Reference**
- [新潟大学 令和4年度入試過去問題](https://www.gs.niigata-u.ac.jp/~gsweb/admission/r4_pq.html)
- [新潟大学 公式問題 PDF](https://www.gs.niigata-u.ac.jp/~gsweb/admission/exam/01%20R4_1%E6%AC%A1%E5%8B%9F%E9%9B%86_%E4%B8%80%E8%88%AC/r4-1-a3-1.pdf)
