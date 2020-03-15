# Hyper-Minato

Hyperのカスタムテーマプラグインです。
![スクリーンショット 2020-03-15 1 35 31](https://user-images.githubusercontent.com/36401898/76697390-f30eef00-66d9-11ea-9ae5-c667c6b34fc8.png)


# 謝辞

[湊あくあ](https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg)に対する愛とyui540さんの[hyper-akari](https://github.com/yui540/hyper-akari)を参考に作りました。ありがとうございます。絵も友人に書いて貰いました。

また、かなり雑に作ってあるため、環境依存になる可能性(`~/.hyper.js`を直接編集する必要がある)と、npmパッケージとして出版していない為、導入が多少面倒であることを踏まえ、私自身の知見が足りていない事に対するお詫びをここで申し上げます。

# 導入方法
### 1. `~/.hyper_plugins/local/`にこのファイルを配置する
例：`~/.hyper_plugins/local/hyper-minato`

### 2.`~/.hyper.js`の中身のlocalPluginsに配置したディレクトリ名を入力する。
`localPlugins: ['hyper-minato'],`

### 3.更新する。