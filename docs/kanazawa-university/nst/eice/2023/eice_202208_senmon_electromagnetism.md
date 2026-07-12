---
sidebar_label: 2022年8月実施 専門科目 電気磁気学
tags:
  - Kanazawa-University
  - Physics.Electromagnetism.Electric-Potential-and-Field
  - Physics.Electromagnetism.Biot-Savart-Law
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 専門科目 電気磁気学

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
真空中における電磁気現象に関する設問に答えなさい。真空の誘電率，透磁率をそれぞれ $\varepsilon_0,\,\mu_0$ とする。

### 問1
図1のように，$xy$ 平面上に線電荷密度 $\lambda(>0)$ が原点を中心として半径 $a$ の円環上に一様に分布している。以下の問に答えなさい。

(1) $z$ 軸上 $P$ 点 $(0,0,z)$ での電位を求めなさい。電位の基準は無限遠とする。

(2) $z$ 軸上の電界は $z=z_0(>0)$ で最大値をとる。$z_0$ を求めなさい。

(3) この円状電荷を $z$ 軸を中心軸に角速度 $\omega$ で回転させた。このとき得られる電流の大きさを求めなさい。

### 問2
図2のように，$z$ 軸を共通軸とする 2 つの円形回路 $(\#1,\#2)$ が $xy$ 平面上におかれている。$\#1$ と $\#2$ の回路半径はそれぞれ $a$ および $b(\ll a)$ であり，$\#1$ には矢印方向に定常電流 $I$ が流れている。また $\#2$ には微小ギャップがあり，このギャップの間隔は無視できるほど小さいとする。以下の問に答えなさい。

(1) 原点 $(0,0)$ における磁界の大きさを求めなさい。

(2) $\#1$ と $\#2$ が同一平面上にあるときの相互インダクタンスを求めなさい。ただし，$\#2$ 内の磁界の面内分布は一様とする。

(3) $\#2$ のみ $+z$ 方向に速さ $v(>0)$ で等速運動させると，$\#2$ のギャップに起電力が生じた。そして，この起電力は $z=z_0(>0)$ で最大値をとる。$z_0$ を求めなさい。ただし，$\#2$ 内の磁界の面内分布は一様とする。

### 図

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kanazawa_university/nst/eice_202208_senmon_electromagnetism_p1.png" width="600" alt=""/>
</figure>

## **Kai**

### 問1

#### (1)
$z$ 軸まわりの角度を $\theta$ としたとき，$\theta \sim \theta+d\theta$ の部分の微小電荷 $\lambda a\,d\theta$ による点 $P$ での電位分は

$$
dV=\frac{\lambda a\,d\theta}{4\pi\varepsilon_0\sqrt{a^2+z^2}}
$$

である。これを周回積分することで，円状電荷からの電位は

$$
V(z)=\int_0^{2\pi} dV
=\frac{\lambda a}{2\varepsilon_0\sqrt{a^2+z^2}}
$$

となる。

#### (2)
電界は電位の勾配ベクトルであるため，

$$
\boldsymbol{E}
=-\mathrm{grad}\,V
=\boldsymbol{e}_z\left(-\frac{\partial V}{\partial z}\right)
=\boldsymbol{e}_z
\frac{\lambda az}{2\varepsilon_0(a^2+z^2)^{3/2}}
$$

となる。

この電界の大きさが最大となる $z_0$ は

$$
\frac{d}{dz}
\left\{
\frac{z}{(a^2+z^2)^{3/2}}
\right\}=0
$$

より，

$$
\frac{a^2-2z^2}{(a^2+z^2)^{5/2}}=0
$$

したがって，

$$
z_0=\frac{a}{\sqrt{2}}
$$

となる。

#### (3)
円環上の全電荷は

$$
q=2\pi a\lambda
$$

である。また，単位時間あたりの回転数は

$$
\frac{\omega}{2\pi}
$$

である。

電流の定義は単位時間あたりに通過する電荷量なので，

$$
I=2\pi a\lambda\cdot \frac{\omega}{2\pi}
=\omega a\lambda
$$

となる。

---

### 問2

#### (1)
ビオ・サバールの法則より，

$$
dH=\frac{I\,ds\sin\theta}{4\pi r^2}
$$

である。本問では $r=a,\ \theta=90^\circ$ なので，

$$
dH=\frac{I\,ds}{4\pi a^2}
$$

となる。したがって，原点における磁界の大きさは

$$
H=\int_0^{2\pi a}\frac{I\,ds}{4\pi a^2}
=\frac{I}{2a}
$$

である。

#### (2)
$\#2$ のループ回路内の磁界の面内分布は一様とするため，鎖交磁束は

$$
\Phi=\mu_0 H\pi b^2
$$

である。

問2(1)より $H=I/(2a)$ だから，

$$
\Phi
=\mu_0\frac{I}{2a}\pi b^2
=\frac{\mu_0 I\pi b^2}{2a}
$$

となる。したがって，相互インダクタンス $M$ は

$$
M=\frac{\Phi}{I}
=\frac{\mu_0\pi b^2}{2a}
$$

である。

#### (3)
$z$ の位置での磁界の大きさを考える。このとき

$$
r=\sqrt{a^2+z^2}
$$

であり，$xy$ 平面成分は周回積分により打ち消されるので，磁界の $z$ 方向成分のみを考えればよい。

したがって，

$$
H
=\oint dH\sin\alpha
=\int_0^{2\pi a}
\frac{I\,ds}{4\pi(a^2+z^2)}
\frac{a}{\sqrt{a^2+z^2}}
$$

より，

$$
H(z)=\frac{Ia^2}{2(a^2+z^2)^{3/2}}
$$

となる。

$\#2$ のループ回路は $z=vt$ で等速運動しているので，鎖交磁束は

$$
\Phi
=\mu_0 H\pi b^2
=\frac{\mu_0 I\pi a^2b^2}{2(a^2+v^2t^2)^{3/2}}
$$

である。

ファラデーの法則より，抵抗間の起電力の大きさは

$$
e=-\frac{\partial \Phi}{\partial t}
=\frac{3\mu_0 I\pi a^2b^2}{2}
\frac{v^2t}{(a^2+v^2t^2)^{5/2}}
$$

である。$z=vt$ とおくと，

$$
e
=\frac{3\mu_0 I\pi a^2b^2v}{2}
\frac{z}{(a^2+z^2)^{5/2}}
$$

となる。

この起電力が最大となるのは

$$
\frac{d}{dz}
\left\{
\frac{z}{(a^2+z^2)^{5/2}}
\right\}=0
$$

のときである。計算すると，

$$
\frac{a^2-4z^2}{(a^2+z^2)^{7/2}}=0
$$

したがって，

$$
z_0=\frac{a}{2}
$$

となる。
