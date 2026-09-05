---
sidebar_label: "2024年度 午前 ⑦"
tags:
  - institute-of-science-tokyo
  - Chemistry.Physical-Chemistry.Consecutive-First-Order-Reaction-Kinetics
---
# 東京科学大学 生命理工学院 生命理工学系 2024年度 午前 ⑦

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

以下は[公式問題の12ページ](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_bio_20238&key=684a39c36a0644cea000cc3c0fdeb42b.pdf&pageId=3186&prevId=&type=1)をもとにした独立要約である。

逐次一次反応

$$
A\xrightarrow{k_a}B\xrightarrow{k_b}C
$$

を考える。初期条件を $[A](0)=[A]_0,[B](0)=[C](0)=0$ とし、逆反応と副反応は無視し、温度と圧力は一定とする。

1. 物質収支を示せ。
2. $[A]$ の速度式を示せ。
3. $[B]$ の速度式を示せ。
4. $[C]=\{1+\boxed{\text{ア}}/(k_b-k_a)\}[A]_0$ の空欄アを、$k_ae^{-k_bt}$ と $k_be^{-k_at}$ を用いて表せ。
5. $[B]$ が最大となる時刻 $t_{\max}$ を求めよ。

## **Kai**

### 1)

$$
\boxed{[A]_0=[A]+[B]+[C]}.
$$

### 2)

$$
\boxed{\frac{d[A]}{dt}=-k_a[A]},\qquad [A]=[A]_0e^{-k_at}.
$$

### 3)

$$
\boxed{\frac{d[B]}{dt}=k_a[A]-k_b[B]}.
$$

### 4)
以下では$k_a,k_b>0$、$k_a\ne k_b$ とする。

積分因子 $e^{k_bt}$ を用いると

$$
[B]=\frac{k_a[A]_0}{k_b-k_a}\left(e^{-k_at}-e^{-k_bt}\right).
$$

したがって

$$
[C]=\left\{1+\frac{k_ae^{-k_bt}-k_be^{-k_at}}{k_b-k_a}\right\}[A]_0,
$$

ゆえに空欄は

$$
\boxed{k_ae^{-k_bt}-k_be^{-k_at}}.
$$

### 5)

$$
\frac{d[B]}{dt}=0
\iff k_be^{-k_bt}=k_ae^{-k_at}.
$$

よって

$$
\boxed{t_{\max}=\frac{\log(k_b/k_a)}{k_b-k_a}}.
$$

$k_a=k_b=k>0$ の場合は、上の式の極限または速度式を直接解くことで $[B]=k[A]_0te^{-kt}$、$[C]=[A]_0\{1-(1+kt)e^{-kt}\}$、$t_{\max}=1/k$ となる。

## **Reference**

- [東京科学大学 大学院 過去の入試問題](https://admissions.isct.ac.jp/ja/013/graduate/examination-questions)
- [生命理工学系 2023年実施問題（2024年度入試）](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_bio_20238&key=684a39c36a0644cea000cc3c0fdeb42b.pdf&pageId=3186&prevId=&type=1)
