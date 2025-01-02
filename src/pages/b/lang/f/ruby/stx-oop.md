---
layout: '@layout/Layout.astro'
---
オブジェクト志向プログラミングにおいて、扱うものは全て**オブジェクト**で、そこから生み出されるものも全て**オブジェクト**です。
**オブジェクト志向プログラミング**(**OOP**)とは、現実世界をそのまま抽象化してプログラミングに落としていくという思想のプログラミング方法です。
カテゴリーにはそれを**クラス**としてコードに落とし込むことができます。
カテゴリーとは、例えば「料理」「掃除」などだと考えてください。

## 1.1. クラスの構造
**クラス**の中には**ステート**と**メソッド**があります。<br>料理で喩えます。**ステート**は「野菜」「肉」などの食材で、**メソッド**は「焼く」「茹でる」などの具体的な調理方法のことです。<br>掃除で喩えます。**ステート**は「壁」「床」などの対象で、**メソッド**は「雑巾掛け」「掃除機をかける」などの掃除方法のことです。

ステートは名詞、メソッドは動詞

例えば、「**野菜**を**焼く**」と言った時、「**〇〇を**」に来るのは**ステート**で、**〇〇する**に来るのは**メソッド**です。

## 1.2. クラスからインスタンス
**クラス**から**コンストラクタ**を呼び出し、**オブジェクト**(**クラスインスタンス**)を作ります。
```ruby
song1 = Song.new("Ruby Tuesday")
song2 = Song.new("Enveloped in Python")
# and so on
```

## 1.3. インスタンスについて
メソッドは、以下の書き方で呼び出すことができます。
メソッド呼び出しの例
他の言語(Java, C)との、メソッド呼び出しの違いを説明しています。関数に数値を入れてアウトプットを求める他の言語と比べ、Rubyでは常にオブジェクトを中心にメソッドが呼び出されていることが分かります。

# クラスの定義の仕方
* クラス名は大文字から始める。
* メソッド名は小文字から始める
* インスタンス変数は`@`から始める
* `initialize`というインスタンスメソッドは特別。
```ruby
class MyClass
  def initialize(param1, param2, param2)
    @instanceValue1 = ____
    @instanceValue2 = ____
    @instanceValue3 = ____
  end
end
```

* `[クラス名].new`メソッドを実行したらそれに付随して`initialize`メソッドが実行される。
* `.new()`の引数で渡されてた値が，`initialize()`の引数として使われる．
```ruby
classInstanceA = MyClass.new(paramA_1, paramA_2, paramA_3)
classInstanceB = MyClass.new(paramB_1, paramB_2, paramB_3)
classInstanceC = MyClass.new(paramC_1, paramC_2, paramC_3)
```

* クラスの内容を確かめる時は，インスタンスに`inspect`メソッドか`to_s`メソッドをつける．

# オブジェクトと属性(アトリビュート)
## 外部からインスタンス内部の情報にアクセスする方法
* Sole responsibility
  * オブジェクトの内部状況は，インスタンスからしかアクセスできないこと．
  * 

```ruby
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end
```
> From the examples we've shown so far, you might be wondering about our earlier assertion that Ruby is an object-oriented language. Well, this chapter is where we justify that claim. We're going to be looking at how you create classes and objects in Ruby, and at some of the ways in which Ruby is more powerful than most object-oriented languages. Along the way, we'll be implementing part of our next billion-dollar product, the Internet Enabled Jazz and Blue Grass jukebox.

(この章では、オブジェクト指向特有の「クラス」について説明する)

> After months of work, our highly paid Research and Development folks have determined that our jukebox needs songs. So it seems like a good idea to start off by setting up a Ruby class that represents things that are songs. We know that a real song has a name, an artist, and a duration, so we'll want to make sure that the song objects in our program do, too.
> We'll start off by creating a basic class Song,[As we mentioned on page 9, class names start with an uppercase letter, while method names start with a lowercase letter.] which contains just a single method, `initialize`.
```ruby
class Song
  def initialize(name, artist, duration)
    @name     = name
    @artist   = artist
    @duration = duration
  end
end
```
> `initialize` is a special method in Ruby programs. When you call `Song.new` to create a new `Song` object, Ruby creates an uninitialized object and then calls that object's `initialize` method, passing in any parameters that were passed to `new`. This gives you a chance to write code that sets up your object's state.
> For class `Song`, the `initialize` method takes three parameters. These parameters act just like local variables within the method, so they follow the local variable naming convention of starting with a lowercase letter.
> Each object represents its own song, so we need each of our `Song` objects to carry around its own song name, artist, and duration. This means we need to store these values as instance variables within the object. In Ruby, an instance variable is simply a name preceded by an ``at'' sign (``@''). In our example, the parameter name is assigned to the instance variable @name, artist is assigned to @artist, and duration (the length of the song in seconds) is assigned to @duration.
> Let's test our spiffy new class.
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.inspect	»	"#<Song:0x401b4924 @duration=260, @artist=\"Fleck\", @name=\"Bicylops\">"
```
> Well, it seems to work. By default, the inspect message, which can be sent to any object, dumps out the object's id and instance variables. It looks as though we have them set up correctly.
> Our experience tells us that during development we'll be printing out the contents of a Song object many times, and inspect's default formatting leaves something to be desired. Fortunately, Ruby has a standard message, to_s, which it sends to any object it wants to render as a string. Let's try it on our song.
```ruby
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.to_s	»	"#<Song:0x401b499c>"
```
> That wasn't too useful---it just reported the object id. So, let's override to_s in our class. As we do this, we should also take a moment to talk about how we're showing the class definitions in this book.
> In Ruby, classes are never closed: you can always add methods to an existing class. This applies to the classes you write as well as the standard, built-in classes. All you have to do is open up a class definition for an existing class, and the new contents you specify will be added to whatever's there.
> This is great for our purposes. As we go through this chapter, adding features to our classes, we'll show just the class definitions for the new methods; the old ones will still be there. It saves us having to repeat redundant stuff in each example. Obviously, though, if you were creating this code from scratch, you'd probably just throw all the methods into a single class definition.


## Inheritance and Messages

> Inheritance allows you to create a class that is a refinement or specialization of another class. For example, our jukebox has the concept of songs, which we encapsulate in class `Song`. Then marketing comes along and tells us that we need to provide karaoke support. A karaoke song is just like any other (there's no vocal on it, but that doesn't concern us). However, it also has an associated set of lyrics, along with timing information. When our jukebox plays a karaoke song, the lyrics should flow across the screen on the front of the jukebox in time with the music.

> An approach to this problem is to define a new class, `KaraokeSong`, which is just like `Song`, but with a lyric track.

```ruby
class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
end
```

---

> The "`< Song`" on the class definition line tells Ruby that a `KaraokeSong` is a *subclass* of `Song`. (Not surprisingly, this means that `Song` is a *superclass* of `KaraokeSong`. People also talk about parent-child relationships, so `KaraokeSong`'s parent would be `Song`.) For now, don't worry too much about the `initialize` method; we'll talk about that `super` call later.
Let's create a `KaraokeSong` and check that our code worked. (In the final system, the lyrics will be held in an object that includes the text and timing information. To test out our class, though, we'll just use a string. This is another benefit of untyped languages---we don't have to define everything before we start running code.

| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| --- | --- | --- |
| `aSong.to_s` | » | `"Song: My Way--Sinatra (225)"` |

> Well, it ran, but why doesn't the `to_s` method show the lyric?
> The answer has to do with the way Ruby determines which method should be called when you send a message to an object. When Ruby compiles the method invocation `aSong.to_s`, it doesn't actually know where to find the method `to_s`. Instead, it defers the decision until the program is run. At that time, it looks at the class of `aSong`. If that class implements a method with the same name as the message, that method is run. Otherwise, Ruby looks for a method in the parent class, and then in the grandparent, and so on up the ancestor chain. If it runs out of ancestors without finding the appropriate method, it takes a special action that normally results in an error being raised.

*[In fact, you can intercept this error, which allows you to fake out methods at runtime. This is described under [`Object#method_missing`](https://ruby-doc.com/docs/ProgrammingRuby/html/ref_c_object.html#Object.method_missing) on page 355.]*

> So, back to our example. We sent the message `to_s` to `aSong`, an object of class `KaraokeSong`. Ruby looks in `KaraokeSong` for a method called `to_s`, but doesn't find it. The interpreter then looks in `KaraokeSong`'s parent, class `Song`, and there it finds the `to_s` method that we defined on page 18. That's why it prints out the song details but not the lyrics---class `Song`doesn't know anything about lyrics.

> Let's fix this by implementing `KaraokeSong#to_s`. There are a number of ways to do this. Let's start with a bad way. We'll copy the `to_s` method from `Song` and add on the lyric.

| `class KaraokeSong` |  |  |
| --- | --- | --- |
| `# ...` |  |  |
| `def to_s` |  |  |
| `"KS: #{@name}--#{@artist} (#{@duration}) [#{@lyrics}]"` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| `aSong.to_s` | » | `"KS: My Way--Sinatra (225) [And now, the...]"` |

> We're correctly displaying the value of the `@lyrics` instance variable. To do this, the subclass directly accesses the instance variables of its ancestors. So why is this a bad way to implement `to_s`? The answer has to do with good programming style (and something called *decoupling*). By poking around in our parent's internal state, we're tying ourselves tightly to its implementation. Say we decided to change `Song` to store the duration in milliseconds. Suddenly, `KaraokeSong` would start reporting ridiculous values. The idea of a karaoke version of ``My Way'' that lasts for 3750 minutes is just too frightening to consider.
> We get around this problem by having each class handle its own internal state. When `KaraokeSong#to_s` is called, we'll have it call its parent's `to_s` method to get the song details. It will then append to this the lyric information and return the result. The trick here is the Ruby keyword `super`". When you invoke `super` with no arguments, Ruby sends a message to the current object's parent, asking it to invoke a method of the same name as the current method, and passing it the parameters that were passed to the current method. Now we can implement our new and improved `to_s`.

| `class KaraokeSong < Song` |  |  |
| --- | --- | --- |
| `# Format ourselves as a string by appending` |  |  |
| `# our lyrics to our parent's #to_s value.` |  |  |
| `def to_s` |  |  |
| `super + " [#{@lyrics}]"` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")` |  |  |
| `aSong.to_s` | » | `"Song: My Way--Sinatra (225) [And now, the...]"` |

> We explicitly told Ruby that `KaraokeSong` was a subclass of `Song`, but we didn't specify a parent class for `Song` itself. If you don't specify a parent when defining a class, Ruby supplies class `Object` as a default. This means that all objects have `Object` as an ancestor, and that `Object`'s instance methods are available to every object in Ruby. Back on page 18 we said that `to_s` is available to all objects. Now we know why; `to_s` is one of more than 35 instance methods in class `Object`. The complete list begins on page 351.

> ### **Inheritance and Mixins**
> Some object-oriented languages (notably C++) support multiple inheritance, where a class can have more than one immediate parent, inheriting functionality from each. Although powerful, this technique can be dangerous, as the inheritance hierarchy can become ambiguous.
Other languages, such as Java, support single inheritance. Here, a class can have only one immediate parent. Although cleaner (and easier to implement), single inheritance also has drawbacks---in the real world things often inherit attributes from multiple sources (a ball is both a *bouncing thing* and a *spherical thing* , for example).
Ruby offers an interesting and powerful compromise, giving you the simplicity of single inheritance and the power of multiple inheritance. A Ruby class can have only one direct parent, and so Ruby is a single-inheritance language. However, Ruby classes can include the functionality of any number of mixins (a mixin is like a partial class definition). This provides a controlled multiple-inheritance-like capability with none of the drawbacks. We'll explore mixins more beginning on page 98.
So far in this chapter we've been looking at classes and their methods. Now it's time to move on to the objects, such as the instances of class `Song`.

## **Objects and Attributes**
The `Song` objects we've created so far have an internal state (such as the song title and artist). That state is private to those objects---no other object can access an object's instance variables. In general, this is a Good Thing. It means that the object is solely responsible for maintaining its own consistency.

However, an object that is totally secretive is pretty useless---you can create it, but then you can't do anything with it. You'll normally define methods that let you access and manipulate the state of an object, allowing the outside world to interact with the object. These externally visible facets of an object are called its *attributes*. For our `Song` objects, the first thing we may need is the ability to find out the title and artist (so we can display them while the song is playing) and the duration (so we can display some kind of progress bar).

| `class Song` |  |  |
| --- | --- | --- |
| `def name` |  |  |
| `@name` |  |  |
| `end` |  |  |
| `def artist` |  |  |
| `@artist` |  |  |
| `end` |  |  |
| `def duration` |  |  |
| `@duration` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.artist` | » | `"Fleck"` |
| `aSong.name` | » | `"Bicylops"` |
| `aSong.duration` | » | `260` |

Here we've defined three accessor methods to return the values of the three instance attributes. Because this is such a common idiom, Ruby provides a convenient shortcut: `attr_reader` creates these accessor methods for you.

| `class Song` |  |  |
| --- | --- | --- |
| `attr_reader :name, :artist, :duration` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.artist` | » | `"Fleck"` |
| `aSong.name` | » | `"Bicylops"` |
| `aSong.duration` | » | `260` |

This example has introduced something new. The construct `:artist` is an expression that returns a `Symbol` object corresponding to `artist`. You can think of `:artist` as meaning the *name* of the variable `artist`, while plain `artist` is the *value* of the variable. In this example, we named the accessor methods `name`, `artist`, and `duration`. The corresponding instance variables, `@name`, `@artist`, and `@duration`, will be created automatically. These accessor methods are identical to the ones we wrote by hand earlier.

### **Writable Attributes**

Sometimes you need to be able to set an attribute from outside the object. For example, let's assume that the duration that is initially associated with a song is an estimate (perhaps gathered from information on a CD or in the MP3 data). The first time we play the song, we get to find out how long it actually is, and we store this new value back in the `Song` object.
In languages such as C++ and Java, you'd do this with *setter functions*.

```java
class JavaSong {                     // Java code
  private Duration myDuration;
  public void setDuration(Duration newDuration) {
    myDuration = newDuration;
  }
}
s = new Song(....)
s.setDuration(length)
```

---

In Ruby, the attributes of an object can be accessed as if they were any other variable. We've seen this above with phrases such as `aSong.name`. So, it seems natural to be able to assign to these variables when you want to set the value of an attribute. In keeping with the Principle of Least Surprise, that's just what you do in Ruby.

| `class Song` |  |  |
| --- | --- | --- |
| `def duration=(newDuration)` |  |  |
| `@duration = newDuration` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.duration` | » | `260` |
| `aSong.duration = 257   # set attribute with updated value` |  |  |
| `aSong.duration` | » | `257` |

The assignment "`aSong.duration = 257`" invokes the method `duration=` in the `aSong` object, passing it `257` as an argument. In fact, defining a method name ending in an equals sign makes that name eligible to appear on the left-hand side of an assignment.

Again, Ruby provides a shortcut for creating these simple attribute setting methods.
```ruby
class Song
  attr_writer :duration
end
aSong = Song.new("Bicylops", "Fleck", 260)
aSong.duration = 257
```

---

### **Virtual Attributes**

These attribute accessing methods do not have to be just simple wrappers around an object's instance variables. For example, you might want to access the duration in minutes and fractions of a minute, rather than in seconds as we've been doing.

| `class Song` |  |  |
| --- | --- | --- |
| `def durationInMinutes` |  |  |
| `@duration/60.0   # force floating point` |  |  |
| `end` |  |  |
| `def durationInMinutes=(value)` |  |  |
| `@duration = (value*60).to_i` |  |  |
| `end` |  |  |
| `end` |  |  |
| `aSong = Song.new("Bicylops", "Fleck", 260)` |  |  |
| `aSong.durationInMinutes` | » | `4.333333333` |
| `aSong.durationInMinutes = 4.2` |  |  |
| `aSong.duration` | » | `252` |

Here we've used attribute methods to create a virtual instance variable. To the outside world, `durationInMinutes` seems to be an attribute like any other. Internally, though, there is no corresponding instance variable.

This is more than a curiosity. In his landmark book *Object-Oriented Software Construction*, Bertrand Meyer calls this the *Uniform Access Principle*. By hiding the difference between instance variables and calculated values, you are shielding the rest of the world from the implementation of your class. You're free to change how things work in the future without impacting the millions of lines of code that use your class. This is a big win.