---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 複素関数論
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 複素関数論

## **Author**
Miyake

## **Description**
解析関数 $f(z) = u + iv$ を考える. ただし, $z = x + iy$ は複素数, $x$ と $y$ は実数, $u$ と $v$ は実数値関数, $i = \sqrt{-1}$ である.
$x$ と $y$ が極形式 $x = r \cos \theta$ と $y = r \sin \theta$ で表されるとき, 極形式のコーシー・リーマンの方程式は以下の式で書けることを示せ.

$$
\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}, \frac{\partial v}{\partial r} = -\frac{1}{r} \frac{\partial u}{\partial \theta}, 
$$

## **Kai**
$x = r \cos \theta, y = r \sin \theta$ より、

$$
  \begin{aligned}
  \frac{\partial x}{\partial r} = \cos \theta
  , \ \ 
  \frac{\partial x}{\partial \theta} = -r \sin \theta
  , \ \ 
  \frac{\partial y}{\partial r} = \sin \theta
  , \ \ 
  \frac{\partial y}{\partial \theta} = r \cos \theta
  \end{aligned}
$$

なので、

$$
  \begin{aligned}
  \frac{\partial u}{\partial r}
  &= \frac{\partial x}{\partial r} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial r} \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial u}{\partial x}
  + \sin \theta \frac{\partial u}{\partial y}
  , \\
  \frac{\partial u}{\partial \theta}
  &= \frac{\partial x}{\partial \theta} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial \theta} \frac{\partial u}{\partial y}
  \\
  &= -r \sin \theta \frac{\partial u}{\partial x}
  + r \cos \theta \frac{\partial u}{\partial y}
  , \\
  \frac{\partial v}{\partial r}
  &= \frac{\partial x}{\partial r} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial r} \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial v}{\partial x}
  + \sin \theta \frac{\partial v}{\partial y}
  , \\
  \frac{\partial v}{\partial \theta}
  &= \frac{\partial x}{\partial \theta} \frac{\partial u}{\partial x}
  + \frac{\partial y}{\partial \theta} \frac{\partial u}{\partial y}
  \\
  &= -r \sin \theta \frac{\partial v}{\partial x}
  + r \cos \theta \frac{\partial v}{\partial y}
  \end{aligned}
$$

である。

さらに、コーシー・リーマンの方程式

$$
  \begin{aligned}
  \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}
  , \ \ 
  \frac{\partial u}{\partial y} = - \frac{\partial v}{\partial x}
  \end{aligned}
$$

を使うと、

$$
  \begin{aligned}
  \frac{\partial u}{\partial r}
  &= \cos \theta \frac{\partial u}{\partial x}
  + \sin \theta \frac{\partial u}{\partial y}
  \\
  &= \cos \theta \frac{\partial v}{\partial y}
  - \sin \theta \frac{\partial v}{\partial x}
  \\
  &= \frac{1}{r} \frac{\partial v}{\partial \theta}
  , \\
  \frac{\partial v}{\partial r}
  &= \cos \theta \frac{\partial v}{\partial x}
  + \sin \theta \frac{\partial v}{\partial y}
  \\
  &= - \cos \theta \frac{\partial u}{\partial y}
  + \sin \theta \frac{\partial u}{\partial x}
  \\
  &= - \frac{1}{r} \frac{\partial u}{\partial \theta}
  \end{aligned}
$$

を得る。