---
sidebar_label: "2013年8月実施 問題2（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
---

# 大阪大学 工学研究科 機械工学専攻 2013年8月実施 熱工学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

式 [1] で与えられる状態方程式に従う実在気体の閉じた系に対する熱力学的特性を求めたい。

$$
p(v-nb)=nR_0T\exp\left(-\frac{na}{vR_0T}\right) \tag{[1]}
$$

ここで、$p$ は圧力、$v$ は体積、$n$ はモル数、$T$ は絶対温度、$R_0$ は一般気体定数、$a$ ならびに $b$ は定数である。以下の問いに答えなさい。

(1) この気体1モルに対し、微小な熱量 $\Delta q$ を加えたとき、外部に対して $\Delta w$ の仕事をして、内部エネルギーが $\Delta u$ 増加した。$\Delta q,\Delta w,\Delta u$ の間に成り立つ関係式を示しなさい。

(2) この気体1モルに対し、体積を一定に保ちながら微小な熱量 $\Delta q$ を加えたとき、温度が $\Delta T$ 上昇した。このときの、加えた熱量 $\Delta q$ と温度上昇 $\Delta T$ の比を、定積モル比熱 $c_v$ として式 [2] で表す。

$$
\left(\frac{\Delta q}{\Delta T}\right)_v=c_v \tag{[2]}
$$

このときの気体の内部エネルギーの変化 $\Delta u$ を、$c_v,\Delta T$ を用いて示しなさい。

(3) この気体1モルに対し、圧力を一定に保ちながら微小な熱量 $\Delta q$ を加えたとき、内部エネルギーが $\Delta u$ 増加し、温度が $\Delta T$ 上昇し、体積が $\Delta v$ 増加した。式 [1] を用いて、$(\Delta v/\Delta T)_p$ を求めなさい。また、この気体が外部に対してなした準静的な仕事 $\Delta w$ ならびに内部エネルギーの増加 $\Delta u$ を、$v,T,\Delta T,R_0,a,b,c_v$ の中から必要なものを用いて示しなさい。なお、熱力学の一般関係式より、温度が $\Delta T$ 上昇し、体積が $\Delta v$ 増加したときの気体1モルの内部エネルギーの増加 $\Delta u$ は式 [3] で与えられる。ただし、$c_v$ は小問 (2) で定義した定積モル比熱である。

$$
\Delta u=c_v\Delta T+\left\{T\left(\frac{\Delta p}{\Delta T}\right)_v-p\right\}\Delta v \tag{[3]}
$$

(4) この気体1モルに対し、圧力を一定に保ちながら微小な熱量を加えたとき、加えた熱量 $\Delta q$ と温度上昇 $\Delta T$ の比を、定圧モル比熱 $c_p$ として式 [4] で表す。

$$
\left(\frac{\Delta q}{\Delta T}\right)_p=c_p \tag{[4]}
$$

このとき、小問 (1)～(3) の結果を用いて、この気体における $c_p-c_v$ を、$v,T,R_0,a,b$ の中から必要なものを用いて示しなさい。

#### 题目描述

问题2（使用白色答题纸）

希望求出服从状态方程 [1] 的真实气体闭口系统的热力学性质。

$$
p(v-nb)=nR_0T\exp\left(-\frac{na}{vR_0T}\right) \tag{[1]}
$$

其中 $p$ 为压力，$v$ 为体积，$n$ 为摩尔数，$T$ 为绝对温度，$R_0$ 为通用气体常数，$a,b$ 为常数。回答下列问题。

(1) 向1摩尔该气体加入微小热量 $\Delta q$，气体对外做功 $\Delta w$，内能增加 $\Delta u$。写出 $\Delta q,\Delta w,\Delta u$ 之间的关系。

(2) 在体积不变的条件下，向1摩尔该气体加入微小热量 $\Delta q$，温度升高 $\Delta T$。将加入热量与温升之比定义为定容摩尔比热 $c_v$，如式 [2]：

$$
\left(\frac{\Delta q}{\Delta T}\right)_v=c_v. \tag{[2]}
$$

用 $c_v,\Delta T$ 表示此时气体内能的变化 $\Delta u$。

(3) 在压力不变的条件下，向1摩尔该气体加入微小热量 $\Delta q$，内能增加 $\Delta u$，温度升高 $\Delta T$，体积增加 $\Delta v$。利用式 [1] 求 $(\Delta v/\Delta T)_p$；并从 $v,T,\Delta T,R_0,a,b,c_v$ 中选用所需的量，表示气体对外做的准静态功 $\Delta w$ 和内能增量 $\Delta u$。由热力学的一般关系，当温度升高 $\Delta T$、体积增加 $\Delta v$ 时，1摩尔气体的内能增量满足式 [3]；其中 $c_v$ 为 (2) 中定义的定容摩尔比热。

$$
\Delta u=c_v\Delta T+\left\{T\left(\frac{\Delta p}{\Delta T}\right)_v-p\right\}\Delta v. \tag{[3]}
$$

(4) 在压力不变的条件下，向1摩尔该气体加入微小热量，将加入热量 $\Delta q$ 与温升 $\Delta T$ 的比定义为定压摩尔比热 $c_p$，如式 [4]：

$$
\left(\frac{\Delta q}{\Delta T}\right)_p=c_p. \tag{[4]}
$$

利用 (1)～(3) 的结果，从 $v,T,R_0,a,b$ 中选用所需的量表示该气体的 $c_p-c_v$。

## **Kai**

### (1), (2)

第一法則および定積条件から

$$
\boxed{\Delta q=\Delta u+\Delta w},\qquad
\boxed{(\Delta u)_v=c_v\Delta T}.
$$

以下は微小量の一次までを考える。

### (3)

$E=\exp[-a/(vR_0T)]$、$D=v^2R_0T-a(v-b)$ とおく。1モルの状態方程式は $p=R_0TE/(v-b)$ であり、その対数微分より

$$
\frac{dp}{p}=\left(\frac1T+\frac{a}{vR_0T^2}\right)dT
+\left(-\frac1{v-b}+\frac{a}{v^2R_0T}\right)dv.
$$

$dp=0$ とおけば

$$
\boxed{\left(\frac{\Delta v}{\Delta T}\right)_p
=\frac{v(v-b)(vR_0T+a)}{TD}}.
$$

したがって

$$
\boxed{\Delta w=p\Delta v
=\frac{R_0v(vR_0T+a)E}{D}\,\Delta T}.
$$

また、$T(\partial p/\partial T)_v-p=ap/(vR_0T)$ なので

$$
\boxed{\Delta u=\left[c_v+\frac{a(vR_0T+a)E}{TD}\right]\Delta T}.
$$

これらは $v>b$、$D\ne0$ の通常の微分可能な状態での式であり、機械的安定領域では $D>0$ である。

### (4)

定圧で $c_p\Delta T=\Delta u+\Delta w$ より

$$
\boxed{c_p-c_v=\frac{(vR_0T+a)^2}{T\{v^2R_0T-a(v-b)\}}
\exp\left(-\frac{a}{vR_0T}\right)}.
$$

$a=b=0$ では理想気体の関係 $c_p-c_v=R_0$ に戻る。
