---
sidebar_label: '2012年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Fermat-Principle-and-Snells-Law
---

# 東京大学 工学系研究科 2012年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

屈折率 $n_1$ の媒質 1 から入射角 $\theta_1$ で進む光が、屈折率 $n_2$ の媒質 2 に入り、屈折角 $\theta_2$ で進む。図 4.1 では点 A は界面から高さ $a$、点 B は界面から深さ $b$ にあり、両点の水平距離は $c$。A の真下から入射点までの距離を $x$ とする。

![光学距離を停留させる屈折光路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_4_fermat_audited.svg)

1. 屈折率と光の進む距離の積を光学距離という。A から B までの光学距離を $n_1,n_2,a,b,c,x$ で表せ。
2. 光路が光学距離を停留させるフェルマーの原理から、スネルの法則 $n_1\sin\theta_1=n_2\sin\theta_2$ を導け。

### II

真空中に平担な平行平板ガラスを置き、入射光が面の法線となす角を $\theta_1$ とする。入射光の直進延長と出射光との間の垂直距離を、図 4.2 のように光線の移動量 $d$ と定義する。

![単層・二層平行平板ガラスを通る光の側方変位](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_4_plates_audited.svg)

1. 屈折率 $n_1$、厚さ $h_1$ の平板ガラス 1 による移動量 $d$ を求めよ。
2. ガラス 1 の下に、屈折率 $n_2>n_1$、厚さ $h_2$ の平板ガラス 2 を貼り合わせる。通過後の移動量 $d$ を $\theta_1,n_1,n_2,h_1,h_2$ を用いて表せ。

### III

真空中に屈折率 $n_1$ のガラス製の頂角 $\alpha$ のプリズムを置く。光が入射角 $\theta_a$ で入り、出射角 $\theta_b$ で出るとする。光の偏向角を $\epsilon$ とする。

![プリズムの屈折光路と最小偏向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_4_prism_audited.svg)

1. $\epsilon$ を $\theta_a,\theta_b,\alpha$ で表せ。
2. $\epsilon$ が最小値 $\epsilon_{\min}$ を取るときの $\theta_a,\theta_b$ の関係を導き、過程も記せ。
3. $n_1$ を $\epsilon_{\min},\alpha$ で表せ。

#### 题目描述

I. 光从折射率 $n_1$ 的介质 1 以入射角 $\theta_1$ 入射到折射率 $n_2$ 的介质 2，折射角为 $\theta_2$。A 点高于界面 $a$，B 点低于界面 $b$，两点水平相距 $c$；从 A 的界面投影到入射点的水平距离为 $x$。

1. 光程等于折射率与传播距离之积。求 A 到 B 的光程，用 $n_1,n_2,a,b,c,x$ 表示。
2. 由费马原理推导斯涅尔定律 $n_1\sin\theta_1=n_2\sin\theta_2$。

II. 在真空中放置平行平板玻璃，入射角为相对法线的 $\theta_1$。将入射光直线延长线与出射光之间的垂直距离定义为侧移 $d$。

1. 玻璃 1 的折射率为 $n_1$、厚度为 $h_1$，求 $d$。
2. 在玻璃 1 下方贴合折射率 $n_2>n_1$、厚度 $h_2$ 的玻璃 2，求通过两层后的 $d$。

III. 真空中有顶角 $\alpha$、折射率 $n_1$ 的玻璃棱镜，入射角为 $\theta_a$，出射角为 $\theta_b$，偏向角为 $\epsilon$。

1. 用 $\theta_a,\theta_b,\alpha$ 表示 $\epsilon$。
2. 推导最小偏向角 $\epsilon_{\min}$ 所对应的 $\theta_a,\theta_b$ 的关系。
3. 用 $\epsilon_{\min},\alpha$ 表示 $n_1$。

## **Kai**

### I

#### I.1

$$
\boxed{L(x)=n_1\sqrt{a^2+x^2}+n_2\sqrt{b^2+(c-x)^2}}.
$$

#### I.2

フェルマーの原理 $L'(x)=0$ より

$$
n_1\frac{x}{\sqrt{a^2+x^2}}=n_2\frac{c-x}{\sqrt{b^2+(c-x)^2}}.
$$

各分数は $\sin\theta_1,\sin\theta_2$ に等しいから、

$$
\boxed{n_1\sin\theta_1=n_2\sin\theta_2}.
$$

### II

#### II.1

ガラス内の屈折角を $\varphi_1$ とすると $\sin\varphi_1=\sin\theta_1/n_1$。出射光は入射光と平行なので、

$$
d=h_1(\tan\theta_1-\tan\varphi_1)\cos\theta_1
=\frac{h_1\sin(\theta_1-\varphi_1)}{\cos\varphi_1}.
$$

したがって

$$
\boxed{d=h_1\sin\theta_1\left(1-\frac{\cos\theta_1}
{\sqrt{n_1^2-\sin^2\theta_1}}\right)}.
$$

#### II.2

各層で $n_j\sin\varphi_j=\sin\theta_1$ が成り立つ。各層による側方変位を足せば、

$$
\boxed{d=\sin\theta_1\left[
 h_1\left(1-\frac{\cos\theta_1}{\sqrt{n_1^2-\sin^2\theta_1}}\right)
+h_2\left(1-\frac{\cos\theta_1}{\sqrt{n_2^2-\sin^2\theta_1}}\right)
\right]}.
$$

### III

#### III.1

プリズム内の二つの屈折角を $r_1,r_2$ とすると $r_1+r_2=\alpha$。二面での偏向を加えて

$$
\boxed{\epsilon=(\theta_a-r_1)+(\theta_b-r_2)
=\theta_a+\theta_b-\alpha}.
$$

#### III.2

スネルの法則は $\sin\theta_a=n_1\sin r_1$、$\sin\theta_b=n_1\sin r_2$ である。$r_2=\alpha-r_1$ として $\epsilon$ を微分すると、停留条件は

$$
\frac{n_1\cos r_1}{\cos\theta_a}
=\frac{n_1\cos r_2}{\cos\theta_b}.
$$

両辺を二乗してスネルの法則を代入すると、$n_1>1$ では $\sin^2r_1=\sin^2r_2$、よって $r_1=r_2=\alpha/2$ を得る。関数 $\arcsin(n_1\sin r)$ は透過可能な $0<r<\arcsin(1/n_1)$ で下に凸なので、この対称光路が最小である。したがって

$$
\boxed{\theta_a=\theta_b=\frac{\alpha+\epsilon_{\min}}{2}}.
$$

#### III.3

$\sin\theta_a=n_1\sin(\alpha/2)$ から

$$
\boxed{n_1=\frac{\sin((\alpha+\epsilon_{\min})/2)}{\sin(\alpha/2)}}.
$$

