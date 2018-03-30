package controllers

import java.util.UUID

import javax.inject._
import models.{Event, Events}
import play.api.db.slick.{DatabaseConfigProvider, HasDatabaseConfigProvider}
import play.api.libs.json.{JsError, Json}
import play.api.mvc.{AbstractController, ControllerComponents}
import play.api.libs.json.JodaReads._
import play.api.libs.json.JodaWrites._
import slick.jdbc.JdbcProfile

import scala.concurrent.ExecutionContext

@Singleton
class EventsController @Inject()(protected val dbConfigProvider: DatabaseConfigProvider,
                                 cc: ControllerComponents)(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with HasDatabaseConfigProvider[JdbcProfile] {

  implicit val eventReads = Json.using[Json.WithDefaultValues].format[Event]
  implicit val eventWrites = Json.writes[Event]

  import dbConfig.profile.api._

  val events = TableQuery[Events]

  def get(id: String) = Action.async { _ =>
    val resultingEvent = db.run(events.filter(_.id === UUID.fromString(id)).result.headOption)
    resultingEvent.map {
      _ match {
        case Some(event) => Ok(event._2)
        case None => NotFound
      }
    }
  }

  def create = Action(parse.json) { request =>
    val eventResult = request.body.validate[Event]
    eventResult.fold(
      errors => {
        BadRequest(Json.obj("status" -> "KO", "message" -> JsError.toJson(errors)))
      },
      event => {
        db.run(events ++= Seq((event.id, Json.toJson(event), event.createdAt, event.updatedAt)))
        Ok(Json.toJson(event))
      }
    )
  }
}
