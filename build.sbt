name := """open-conf-planner"""
herokuAppName in Compile := "open-conf-planner"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava).settings(
  watchSources ++= (baseDirectory.value / "public/ui" ** "*").get
)

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.12.2"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += "org.postgresql" % "postgresql" % "42.2.2"
libraryDependencies += "com.typesafe.play" %% "play-slick" % "3.0.0"
libraryDependencies += "com.typesafe.play" %% "play-slick-evolutions" % "3.0.0"
libraryDependencies += "com.typesafe.play" %% "play-json-joda" % "2.6.9"
libraryDependencies += "com.github.tminglei" %% "slick-pg" % "0.16.0"
libraryDependencies += "com.github.tminglei" %% "slick-pg_joda-time" % "0.16.0"
libraryDependencies += "com.github.tminglei" %% "slick-pg_play-json" % "0.16.0"
