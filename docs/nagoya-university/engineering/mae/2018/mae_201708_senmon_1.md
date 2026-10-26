---
sidebar_label: "2017年8月実施 専門部門 問題1（熱力学）"
tags:
  - Nagoya-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Maxwell-Relations
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

**問題1.** 式①のファン・デル・ワールスの状態方程式に従う1モルの気体を考える。

$$
\left(p+\frac a{v^2}\right)(v-b)=RT\tag{①}
$$

ここで，$p$ は圧力，$v$ は体積，$T$ は絶対温度，$R$ は一般気体定数，$a$ と $b$ はそれぞれ正の定数である。ただし，$v>b$ である。以下の問いに答えよ。

**(1)** この気体の内部エネルギー $u$ に関して，式②の関係式が成り立つ。

$$
\left(\frac{\partial u}{\partial v}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_v-p\tag{②}
$$

式②の証明は，この気体のエントロピー $s$ を用いて，次のような手順で行うことができる。（ア）から（ケ）を $p,v,T,s,R$ のうち必要なものを用いて表せ。

エントロピー $s$ を温度 $T$ と体積 $v$ の関数と考えると，

$$
ds=\boxed{\text{（ア）}}\,dT+\boxed{\text{（イ）}}\,dv
$$

となる。熱力学第一法則から，

$$
du=\boxed{\text{（ウ）}}\,ds+\boxed{\text{（エ）}}\,dv
$$

で与えられるので，

$$
du=\boxed{\text{（オ）}}\,dT+\boxed{\text{（カ）}}\,dv
$$

となる。これにより，

$$
\text{式②の左辺}=\boxed{\text{（キ）}}\tag{③}
$$

が成り立つ。よって，式③にマクスウェルの関係式である

$$
\boxed{\text{（ク）}}=\boxed{\text{（ケ）}}
$$

を使うと式②が導出できる。

**(2)** この気体の内部エネルギー $u$ の体積依存性を求めよ。

**(3)** この気体のモル定積比熱 $c_v$ の体積依存性を求めよ。

**(4)** この気体の体積を $v_1$ から $v_2\ (<v_1)$ まで準静的に等温変化させた。このときの気体になされた仕事，エントロピーの変化および内部エネルギーの変化を求めよ。

### 题目描述

**问题1.** 考虑服从式①范德瓦耳斯状态方程的1摩尔气体。

$$
\left(p+\frac a{v^2}\right)(v-b)=RT\tag{①}
$$

其中 $p$ 为压力，$v$ 为体积，$T$ 为绝对温度，$R$ 为通用气体常数，$a,b$ 均为正常数，且 $v>b$。回答下列问题。

**(1)** 该气体的内能 $u$ 满足关系式②。

$$
\left(\frac{\partial u}{\partial v}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_v-p\tag{②}
$$

可利用气体的熵 $s$，按以下步骤证明式②。用 $p,v,T,s,R$ 中必要的量填写（ア）至（ケ）。

将熵 $s$ 看作温度 $T$ 与体积 $v$ 的函数，则

$$
ds=\boxed{\text{（ア）}}\,dT+\boxed{\text{（イ）}}\,dv.
$$

根据热力学第一定律，

$$
du=\boxed{\text{（ウ）}}\,ds+\boxed{\text{（エ）}}\,dv,
$$

因此

$$
du=\boxed{\text{（オ）}}\,dT+\boxed{\text{（カ）}}\,dv.
$$

由此得到

$$
\text{式②左侧}=\boxed{\text{（キ）}}.\tag{③}
$$

在式③中使用麦克斯韦关系式

$$
\boxed{\text{（ク）}}=\boxed{\text{（ケ）}},
$$

即可导出式②。

**(2)** 求该气体内能 $u$ 对体积的依赖关系。

**(3)** 求该气体摩尔定容热容 $c_v$ 对体积的依赖关系。

**(4)** 将气体从体积 $v_1$ 准静态等温压缩至 $v_2<v_1$，求此过程中外界对气体所做的功、熵的变化及内能的变化。

## **Kai**

### (1)

基本関係 $du=Tds-pdv$ と、$s=s(T,v)$ の全微分から

| 空欄 | 内容 |
| --- | --- |
| ア | $(\partial s/\partial T)_v$ |
| イ | $(\partial s/\partial v)_T$ |
| ウ | $T$ |
| エ | $-p$ |
| オ | $T(\partial s/\partial T)_v$ |
| カ、キ | $T(\partial s/\partial v)_T-p$ |
| ク | $(\partial s/\partial v)_T$ |
| ケ | $(\partial p/\partial T)_v$ |

最後の関係は $f=u-Ts$ の微分 $df=-s\,dT-p\,dv$ の混合偏微分の対称性から従う。

### (2)

$$
p=\frac{RT}{v-b}-\frac{a}{v^2},\qquad
T\left(\frac{\partial p}{\partial T}\right)_v-p=\frac{a}{v^2}.
$$

従って、温度だけの関数を $\varphi$ として

$$
\boxed{u(T,v)=\varphi(T)-\frac{a}{v}}.
$$

### (3)

$$
c_v=\left(\frac{\partial u}{\partial T}\right)_v=\varphi'(T),\qquad
\boxed{\left(\frac{\partial c_v}{\partial v}\right)_T=0}.
$$

体積には依存しないが、温度一定とは限らない。

### (4)

外部から気体に加える仕事を正に取ると

$$
\boxed{W_{\rm on}=-\int_{v_1}^{v_2}p\,dv
=RT\log\frac{v_1-b}{v_2-b}-a\left(\frac1{v_2}-\frac1{v_1}\right)}.
$$

等温過程では $ds=(\partial p/\partial T)_v\,dv$ なので

$$
\boxed{\Delta s=R\log\frac{v_2-b}{v_1-b}},\qquad
\boxed{\Delta u=a\left(\frac1{v_1}-\frac1{v_2}\right)}.
$$

$Q=T\Delta s$ とすると $\Delta u=Q+W_{\rm on}$ が成り立つ。

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 2ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
