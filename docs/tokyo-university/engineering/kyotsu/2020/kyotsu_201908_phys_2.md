---
sidebar_label: '2019年8月実施 物理学2'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Electromagnetic-Wave
  - Physics.Electromagnetism.Skin-Effect
---

# 東京大学 工学系研究科 2019年8月実施 物理学2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

真空中の領域 $-h\le y\le h$（$h>0$）を電気伝導率 $\sigma$ の導体が占め、$x,z$ 方向には無限に広がる。導体の誘電率と透磁率はそれぞれ $\varepsilon_0,\mu_0$ に等しい。$z$ 方向の電場 $E_z$ により電流密度 $j_z=\sigma E_z$ が生じる。対称性から磁束密度は $x$ 成分 $B_x(y)$ のみを持つ。$E_z,B_x$ の正は、それぞれ $+z,+x$ 方向である。

I. $E_z$ が一様かつ時間に依存しない場合を考える。

1. 単位体積・単位時間あたりの発熱量を $\sigma,j_z$ で表せ。
2. $B_x(-y)=-B_x(y)$ として、導体内外の $B_x(y)$ を求めよ。

II. 電磁場が角振動数 $\omega$ で振動し、$E_z=\operatorname{Re}(\widetilde E e^{i\omega t})$、$B_x=\operatorname{Re}(\widetilde B e^{i\omega t})$ と表される場合を考える。

1. Maxwell 方程式

$$
\frac1{\mu_0}\nabla\times\boldsymbol B-\varepsilon_0\frac{\partial\boldsymbol E}{\partial t}=\boldsymbol j,
\qquad
\nabla\times\boldsymbol E+\frac{\partial\boldsymbol B}{\partial t}=0
$$

から次式を導け。電場は $z$ 成分、磁場は $x$ 成分のみで、いずれも $y,t$ のみに依存する。

$$
\frac{d^2\widetilde E}{dy^2}+
(\varepsilon_0\mu_0\omega^2-i\omega\mu_0\sigma)\widetilde E=0.
$$

2. 良導体の条件 $\sigma\gg\varepsilon_0\omega$ では、$\alpha=\sqrt{\omega\mu_0\sigma}$ とおくと

$$
\frac{d^2\widetilde E}{dy^2}-i\alpha^2\widetilde E=0
$$

となる。この一般解を求めよ。
3. $x$ 方向の単位長さあたりの電流が $2h\operatorname{Re}(j_c e^{i\omega t})$ である。$j_c$ は実定数とする。

$$
\int_{-h}^h\sigma\widetilde E\,dy=2hj_c,\qquad
\widetilde E(-y)=\widetilde E(y)
$$

を満たす導体内の解を求めよ。複素数を引数とする $\sinh,\cosh$ を用いてよい。
4. 中心と表面の電場振幅の二乗を $|\widetilde E(0)|^2,|\widetilde E(h)|^2$ とする。(i) $\omega\to0$、(ii) $\omega\gg1/(\mu_0\sigma h^2)$ の各場合に、次の a–c から選び、理由を述べよ。

$$
\text{a. }|\widetilde E(0)|^2\ll|\widetilde E(h)|^2,\quad
\text{b. }|\widetilde E(0)|^2\simeq|\widetilde E(h)|^2,\quad
\text{c. }|\widetilde E(0)|^2\gg|\widetilde E(h)|^2.
$$

![導体平板と電場振幅分布](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2020/kyotsu_201908_phys_2_skin_audited.svg)

#### 题目描述

真空中 $-h\le y\le h$（$h>0$）为电导率 $\sigma$ 的导体，在 $x,z$ 方向无限延伸，介电常数与磁导率分别为 $\varepsilon_0,\mu_0$。沿 $z$ 方向施加电场 $E_z$，产生 $j_z=\sigma E_z$。磁感应强度仅有 $x$ 分量 $B_x(y)$；两者正方向分别为 $+z,+x$。

I. 电场均匀且恒定。

1. 用 $\sigma,j_z$ 表示单位体积、单位时间的发热量。
2. 利用 $B_x(-y)=-B_x(y)$，求导体内外的 $B_x(y)$。

II. 场以角频率 $\omega$ 振荡，写为 $E_z=\operatorname{Re}(\widetilde E e^{i\omega t})$、$B_x=\operatorname{Re}(\widetilde B e^{i\omega t})$。

1. 从 Maxwell 方程

$$
\frac1{\mu_0}\nabla\times\boldsymbol B-\varepsilon_0\frac{\partial\boldsymbol E}{\partial t}=\boldsymbol j,
\qquad \nabla\times\boldsymbol E+\frac{\partial\boldsymbol B}{\partial t}=0
$$

出发，利用电场仅有 $z$ 分量、磁场仅有 $x$ 分量且场仅依赖 $y,t$，证明

$$
\widetilde E''+(\varepsilon_0\mu_0\omega^2-i\omega\mu_0\sigma)\widetilde E=0.
$$

2. 当 $\sigma\gg\varepsilon_0\omega$ 时，令 $\alpha=\sqrt{\omega\mu_0\sigma}$，方程近似为 $\widetilde E''-i\alpha^2\widetilde E=0$。求通解。
3. 沿 $x$ 方向每单位长度的总电流为 $2h\operatorname{Re}(j_c e^{i\omega t})$，$j_c$ 为实常数。利用 $\int_{-h}^h\sigma\widetilde E\,dy=2hj_c$ 及偶对称条件求解，可使用复双曲函数。
4. 对 (i) $\omega\to0$ 和 (ii) $\omega\gg1/(\mu_0\sigma h^2)$，分别判断中心电场振幅平方比表面值是 a. 远小于，b. 约等于，还是 c. 远大于，并说明理由。

## **Kai**

### I.

1. Joule 熱は

$$
\boxed{p=\boldsymbol j\cdot\boldsymbol E=\frac{j_z^2}{\sigma}}.
$$

2. Ampère の法則より $-dB_x/dy=\mu_0j_z$。奇対称性と表面での連続性から

$$
\boxed{B_x(y)=\begin{cases}
\mu_0j_zh,&y<-h,\\
-\mu_0j_zy,&-h\le y\le h,\\
-\mu_0j_zh,&y>h.
\end{cases}}
$$

### II.1

Maxwell 方程式の必要な成分は

$$
-\frac1{\mu_0}\frac{\partial B_x}{\partial y}
=\sigma E_z+\varepsilon_0\frac{\partial E_z}{\partial t},\qquad
\frac{\partial E_z}{\partial y}=-\frac{\partial B_x}{\partial t}.
$$

後式を $y$ で微分して前式を代入すると

$$
\frac{\partial^2E_z}{\partial y^2}
=\mu_0\sigma\frac{\partial E_z}{\partial t}
+\mu_0\varepsilon_0\frac{\partial^2E_z}{\partial t^2}.
$$

$e^{i\omega t}$ の係数を比較して、求める式を得る。

### II.2–3

$q=(1+i)\alpha/\sqrt2$ とおくと $q^2=i\alpha^2$ なので、一般解は

$$
\boxed{\widetilde E(y)=A\cosh(qy)+B\sinh(qy)}.
$$

偶対称性より $B=0$。全電流の条件から $2\sigma A\sinh(qh)/q=2hj_c$、したがって

$$
\boxed{\widetilde E(y)=\frac{hj_cq}{\sigma\sinh(qh)}\cosh(qy)}.
$$

### II.4

$s=\alpha h/\sqrt2$ とおくと

$$
\frac{|\widetilde E(0)|^2}{|\widetilde E(h)|^2}
=\frac1{|\cosh((1+i)s)|^2}
=\frac2{\cosh(2s)+\cos(2s)}.
$$

(i) $\omega\to0$ では $s\to0$ で比は $1$ に近づく。よって **b**。

(ii) $\omega\mu_0\sigma h^2\gg1$ では $s\gg1$ で、比は $4e^{-2s}\ll1$。よって **a**。電流は導体表面付近に集中する。

