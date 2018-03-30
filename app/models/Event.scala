package models

import java.util.UUID

import org.joda.time.DateTime
import play.api.libs.json.JsValue
import slick.lifted.Tag
import infrastructure.MyPostgresProfile.api._

case class Event(id: UUID = UUID.randomUUID(),
                 name: String,
                 createdAt: DateTime = new DateTime(),
                 updatedAt: DateTime = new DateTime())

class Events(tag: Tag) extends Table[(UUID, JsValue, DateTime, DateTime)](tag, "events") {
  def id = column[UUID]("id", O.PrimaryKey)
  def json = column[JsValue]("json")
  def createdAt = column[DateTime]("created_at")
  def updatedAt = column[DateTime]("updated_at")
  def * = (id, json, createdAt, updatedAt)
}
