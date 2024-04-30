# Generated by Django 2.2.11 on 2020-04-14 04:51

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("organization", "0008_projectparents"),
    ]

    operations = [
        migrations.CreateModel(
            name="ProjectTags",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="Points to name of the project tag",
                        max_length=256,
                        verbose_name="Name",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Time when tag was created",
                        verbose_name="Created at",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Time when tag was updated",
                        verbose_name="Updated at",
                    ),
                ),
            ],
            options={
                "verbose_name": "Project Tags",
            },
        ),
        migrations.CreateModel(
            name="ProjectTagging",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Time when project tag was created",
                        verbose_name="Created At",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Time when project tag was updated",
                        verbose_name="Updated At",
                    ),
                ),
                ("additional_info", django.contrib.postgres.fields.jsonb.JSONField()),
                (
                    "project",
                    models.ForeignKey(
                        help_text="Points to project",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="tag_project",
                        to="organization.Project",
                        verbose_name="Project",
                    ),
                ),
                (
                    "project_tag",
                    models.ForeignKey(
                        help_text="Points to project tag",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="tag_project",
                        to="organization.ProjectTags",
                        verbose_name="Project tag",
                    ),
                ),
            ],
            options={
                "verbose_name": "Project Tagging",
                "verbose_name_plural": "Project Taggings",
            },
        ),
    ]
