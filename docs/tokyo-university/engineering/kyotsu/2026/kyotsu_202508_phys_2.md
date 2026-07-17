---
sidebar_label: '2025年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Electric-Dipole-Potential
  - Physics.Electromagnetism.Conducting-Sphere-in-Uniform-Electric-Field
  - Physics.Electromagnetism.Magnetic-Dipole-Vector-Potential
---

# 東京大学 工学系研究科 2025年8月実施 物理学 第2問

## **Author**

GPT-5.6 Sol

## **Description**

真空の誘電率を $\varepsilon_0$、真空の透磁率を $\mu_0$ として、次の I から III に答えよ。

### I

原点 O の両側に、点電荷 $+q$ と $-q$ がそれぞれ

$$
\left(0,0,\frac{d}{2}\right),
\qquad
\left(0,0,-\frac{d}{2}\right)
$$

に置かれている。$-q$ から $+q$ へ向かうベクトルを $\boldsymbol{d}=(0,0,d)$ とし、電荷の位置以外の任意の点の位置ベクトルを $\boldsymbol{r}$ とする。

1. 無限遠を基準とする静電ポテンシャルを求めよ。
2. $|\boldsymbol{d}|/|\boldsymbol{r}|\ll 1$ とする。電気双極子モーメントを $\boldsymbol{p}=q\boldsymbol{d}$ としたとき、静電ポテンシャルが

$$
U(\boldsymbol{r})
=
\frac{\boldsymbol{p}\cdot\boldsymbol{r}}
{4\pi\varepsilon_0|\boldsymbol{r}|^3}
$$

となることを示せ。

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu_202508_phys_2_p1.png" width="200" alt=""/>
</figure>

### II

原点 O を中心とする半径 $R$ の薄い導体球殻が真空中に置かれている。外部から一様な静電場

$$
\boldsymbol{E}_0=(0,0,E_{0z})
$$

を加えたところ、球殻表面に電荷分布が誘起された。

1. 外部電場と誘起電荷の両方を考慮し、球殻外部の静電ポテンシャルを求めよ。基準は任意に選んでよい。
2. 球殻上の任意の点の位置ベクトルを $\boldsymbol{s}\ (|\boldsymbol{s}|=R)$ とする。球殻上の面電荷密度 $\sigma(\boldsymbol{s})$ を求めよ。

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu_202508_phys_2_p2.png" width="300" alt=""/>
</figure>

### III

原点 O を中心とし、$xy$ 平面内に置かれた半径 $\rho$ の一巻き円形コイルに電流 $I$ が流れている。コイル上の位置ベクトルを $\boldsymbol{u}$、電流方向の線素ベクトルを $d\boldsymbol{u}$ とすると、位置 $\boldsymbol{r}$ における磁気ベクトルポテンシャルは

$$
\boldsymbol{A}(\boldsymbol{r})
=
\frac{\mu_0 I}{4\pi}
\oint
\frac{d\boldsymbol{u}}
{|\boldsymbol{r}-\boldsymbol{u}|}
$$

で与えられる。$|\boldsymbol{u}|/|\boldsymbol{r}|\ll 1$ とし、

$$
\boldsymbol{m}
=
\mu_0 S I\boldsymbol{k},
\qquad
S=\pi\rho^2
$$

を磁気双極子モーメントとする。ただし、$\boldsymbol{k}$ は $+z$ 方向の単位ベクトルである。$\boldsymbol{A}(\boldsymbol{r})$ を $\boldsymbol{m}$ と $\boldsymbol{r}$ で表せ。

<figure style={{ textAlign: "center" }}>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu_202508_phys_2_p3.png" width="300" alt=""/>
</figure>

## **Kai**

### I

#### I.1

クーロンポテンシャルを重ね合わせると、

$$
\boxed{
U(\boldsymbol{r})
=
\frac{q}{4\pi\varepsilon_0}
\left(
\frac{1}{\left|\boldsymbol{r}-\boldsymbol{d}/2\right|}
-
\frac{1}{\left|\boldsymbol{r}+\boldsymbol{d}/2\right|}
\right)
}
$$

となる。

#### I.2

$r=|\boldsymbol{r}|$ とおく。$|\boldsymbol{d}|/r\ll 1$ のもとでテイラー展開すると、

$$
\frac{1}{\left|\boldsymbol{r}\mp\boldsymbol{d}/2\right|}
=
\frac{1}{r}
\pm
\frac{\boldsymbol{d}\cdot\boldsymbol{r}}{2r^3}
+\text{同一の偶数次項}
+O\left(\frac{d^3}{r^4}\right).
$$

二つの式の差では定数項と偶数次項が消えるため、

$$
\frac{1}{\left|\boldsymbol{r}-\boldsymbol{d}/2\right|}
-
\frac{1}{\left|\boldsymbol{r}+\boldsymbol{d}/2\right|}
=
\frac{\boldsymbol{d}\cdot\boldsymbol{r}}{r^3}
+
O\left(\frac{d^3}{r^4}\right).
$$

したがって、最低次まで取れば

$$
U(\boldsymbol{r})
=
\frac{q\boldsymbol{d}\cdot\boldsymbol{r}}
{4\pi\varepsilon_0r^3}
=
\boxed{
\frac{\boldsymbol{p}\cdot\boldsymbol{r}}
{4\pi\varepsilon_0|\boldsymbol{r}|^3}
}.
$$

### II

極軸を $z$ 軸に取り、$\theta$ を $\boldsymbol{r}$ と $+z$ 軸のなす角とする。軸対称なラプラス方程式の解のうち、遠方で一様電場のポテンシャル $-E_{0z}r\cos\theta$ に一致するものは

$$
U_{\mathrm{out}}(r,\theta)
=
-E_{0z}r\cos\theta
+
\frac{C\cos\theta}{r^2}
$$

と書ける。導体表面 $r=R$ は等電位面である。電位の任意定数を選んで球殻の電位を 0 とすると、

$$
C=E_{0z}R^3.
$$

よって、球殻外部では

$$
\boxed{
U_{\mathrm{out}}(r,\theta)
=
-E_{0z}
\left(
r-\frac{R^3}{r^2}
\right)
\cos\theta
}
\qquad (r\geq R).
$$

ベクトル表示では

$$
\boxed{
U_{\mathrm{out}}(\boldsymbol{r})
=
-\boldsymbol{E}_0\cdot\boldsymbol{r}
+
R^3
\frac{\boldsymbol{E}_0\cdot\boldsymbol{r}}
{|\boldsymbol{r}|^3}
}.
$$

第 2 項を電気双極子のポテンシャルと比較すると、誘起双極子モーメントは

$$
\boldsymbol{p}_{\mathrm{ind}}
=
4\pi\varepsilon_0R^3\boldsymbol{E}_0
$$

である。

面に垂直な外向き電場は

$$
E_r(R^+,\theta)
=
-\left.
\frac{\partial U_{\mathrm{out}}}{\partial r}
\right|_{r=R}
=
3E_{0z}\cos\theta.
$$

導体内部の電場は 0 なので、境界条件より

$$
\sigma
=
\varepsilon_0
\left(E_r(R^+)-E_r(R^-)\right)
=
3\varepsilon_0E_{0z}\cos\theta.
$$

球面上では $\boldsymbol{E}_0\cdot\boldsymbol{s}=E_{0z}R\cos\theta$ であるから、

$$
\boxed{
\sigma(\boldsymbol{s})
=
\frac{3\varepsilon_0}{R}
\boldsymbol{E}_0\cdot\boldsymbol{s}
}.
$$

### III

$u=|\boldsymbol{u}|=\rho$、$r=|\boldsymbol{r}|$ とする。$u/r\ll 1$ のとき、

$$
\frac{1}{|\boldsymbol{r}-\boldsymbol{u}|}
=
\frac{1}{r}
+
\frac{\boldsymbol{r}\cdot\boldsymbol{u}}{r^3}
+
O\left(\frac{u^2}{r^3}\right).
$$

これを線積分に代入する。閉曲線では $\oint d\boldsymbol{u}=\boldsymbol{0}$ なので、最低次の非零項は

$$
\boldsymbol{A}(\boldsymbol{r})
=
\frac{\mu_0 I}{4\pi r^3}
\oint
(\boldsymbol{r}\cdot\boldsymbol{u})\,d\boldsymbol{u}.
$$

電流方向に沿って

$$
\boldsymbol{u}
=
\rho(\cos\varphi\,\boldsymbol{i}
+\sin\varphi\,\boldsymbol{j}),
$$

$$
d\boldsymbol{u}
=
\rho(-\sin\varphi\,\boldsymbol{i}
+\cos\varphi\,\boldsymbol{j})\,d\varphi
$$

とおくと、

$$
\begin{aligned}
\oint
(\boldsymbol{r}\cdot\boldsymbol{u})\,d\boldsymbol{u}
&=
\pi\rho^2
(-r_y\boldsymbol{i}+r_x\boldsymbol{j})\\
&=
S\,\boldsymbol{k}\times\boldsymbol{r}.
\end{aligned}
$$

したがって、

$$
\boldsymbol{A}(\boldsymbol{r})
=
\frac{\mu_0SI}{4\pi}
\frac{\boldsymbol{k}\times\boldsymbol{r}}{r^3}.
$$

問題文では $\boldsymbol{m}=\mu_0SI\boldsymbol{k}$ と定義されているため、$\mu_0$ を重ねて付けないことに注意すると、

$$
\boxed{
\boldsymbol{A}(\boldsymbol{r})
=
\frac{\boldsymbol{m}\times\boldsymbol{r}}
{4\pi|\boldsymbol{r}|^3}
}
$$

を得る。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 物理学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/P_J_E_2026.pdf)